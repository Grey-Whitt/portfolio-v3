import path from 'path'
import { uploadFile } from '../s3.js'
import multer from 'multer'
import asyncHandler from 'express-async-handler'
import express from 'express'
const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jepg|png/
  const extname = filetypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  )
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only')
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
    res.send(result)
  } else {
    res.status(400)
  }
})

router.route('/').post(upload.single('image'), uploadImage)

export default router
