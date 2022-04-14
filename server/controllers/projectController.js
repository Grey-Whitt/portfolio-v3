import asyncHandler from 'express-async-handler'
import { Project } from '../models/index.js'

// @desc  Fetch projects
// @route GET /api/projects
// @access Public
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.findAll({
    attributes: [
      title,
      description,
      [repo_link, repoLink],
      [deployed_link, deployedLink],
    ],
  })

  if (profile) {
    res.json(projects)
  } else {
    res.status(404)
    throw new Error('No projects')
  }
})

// @desc Create project
// @route POST /api/projects
// @access Public
const createProject = asyncHandler(async (req, res) => {})

// @desc  Update project
// @route PUT /api/projects/:name
// @access Public
const updateProject = asyncHandler(async (req, res) => {})

// @desc  delete project
// @route DELETE /api/projects/:name
// @access Public
const deleteProject = asyncHandler(async (req, res) => {})

export { getProjects, createProject, updateProject, deleteProject }
