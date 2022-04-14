import express from 'express'
const router = express.Router()
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/index.js'

router.route('/').get(getProjects).post(createProject)

router.route('/:id').delete(deleteProject).put(updateProject)

export default router
