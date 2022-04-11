import asyncHandler from 'express-async-handler'
import { Profile } from '../models'

// @desc  Fetch profile
// @route GET /api/profile
// @access Public
const getProfile = asyncHandler(async (req, res) => {
  const profile = Profile.findAll()

  res.json(profile)
})

// @desc  Create profile
// @route POST /api/profile
// @access Private
const createProfile = asyncHandler(async (req, res) => {
  await Profile.destroy()
  const profile = Profile.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    location: req.body.location,
    bio: req.body.bio,
    github: req.body.github,
    linkedin: req.body.linkedin,
    password: req.body.password,
  })

  res.status(201).json(profile)
})

// @desc  Fetch profile
// @route PUT /api/profile
// @access Private
const updateProfile = asyncHandler(async (req, res) => {})

// @desc  Delete profile
// @route GET /api/profile
// @access Private
const deleteProfile = asyncHandler(async (req, res) => {})

// @desc  Create skill
// @route POST /api/profile/skill
// @access Private
const createSkill = asyncHandler(async (req, res) => {})

// @desc  Delete skill
// @route DELETE /api/profile/skill/:id
// @access Private
const deleteSkill = asyncHandler(async (req, res) => {})

export {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
  createSkill,
  deleteSkill,
}
