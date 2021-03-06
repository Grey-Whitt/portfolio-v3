import path from 'path'
import { uploadFile, getFileStream } from '../s3.js'
import multer from 'multer'
import asyncHandler from 'express-async-handler'
import express from 'express'
const router = express.Router()
import fs from 'fs'
import util from 'util'

const unlinkFile = util.promisify(fs.unlink)

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${file.originalname}`)
  },
})

function checkFileType(file, cb) {
  const filetypes = /png|jpg|jpeg/
  const extname = filetypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  )
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb(new Error('Images only'))
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

const uploadImage = asyncHandler(async (req, res) => {
  const file = req.file
  if (file) {
    const result = await uploadFile(file)
    await unlinkFile(file.path)
    res.send({ imagePath: `/images/${result.Key}` })
  } else {
    res.status(400)
  }
})

const getImage = asyncHandler(async (req, res) => {
  const key = req.params.key
  const img = await getFileStream(key)

  if (img) {
    res.send({ key: `${img}` })
  } else {
    res.status(400)
  }
})

router.route('/').post(upload.single('image'), uploadImage)
router.route('/:key').get(getImage)
export default router
