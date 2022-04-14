import asyncHandler from 'express-async-handler'
import { Project } from '../models/index.js'

// @desc  Fetch projects
// @route GET /api/projects
// @access Public
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.findAll({
    attributes: [
      'title',
      'description',
      ['repo_link', 'repoLink'],
      ['deployed_link', 'deployedLink'],
    ],
  })

  if (projects) {
    res.json(projects)
  } else {
    res.status(404)
    throw new Error('No projects')
  }
})

// @desc Create project
// @route POST /api/projects
// @access Public
const createProject = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    repoLink: repo_link,
    deployedLink: deployed_link,
  } = req.body

  const project = await Project.create({
    title,
    description,
    deployed_link,
    repo_link,
  })

  res.status(201).json({
    id: project.id,
    title: project.title,
    description: project.description,
    deployedLink: project.deployed_link,
    repoLink: project.repo_link,
    createdAt: project.createdAt,
  })
})

// @desc  Update project
// @route PUT /api/projects/:id
// @access Public
const updateProject = asyncHandler(async (req, res) => {})

// @desc  delete project
// @route DELETE /api/projects/:id
// @access Public
const deleteProject = asyncHandler(async (req, res) => {})

export { getProjects, createProject, updateProject, deleteProject }
