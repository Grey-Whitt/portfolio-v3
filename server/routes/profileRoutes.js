import express from 'express'
const router = express.Router()
import {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
  createSkill,
  deleteSkill,
} from '../controllers/index.js'

router.route('/').get(getProfile).post(createProfile).delete(deleteProfile)

router.route('/:id').put(updateProfile)

export default router
