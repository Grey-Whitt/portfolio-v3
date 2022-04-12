import asyncHandler from 'express-async-handler'
import { Profile } from '../models/index.js'

// @desc  Fetch profile
// @route GET /api/profile
// @access Public
const getProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findAll()

  res.json(profile)
})

// @desc  Create profile
// @route POST /api/profile
// @access Private
const createProfile = asyncHandler(async (req, res) => {
  await Profile.destroy({
    where: {},
  })

  const profile = await Profile.create({ ...req.body })

  res.status(201).json(profile)
})

// @desc  Fetch profile
// @route PUT /api/profile/:id
// @access Private
const updateProfile = asyncHandler(async (req, res) => {
  const updatedProfile = await Profile.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })

  if (updatedProfile) {
    const {
      id,
      first_name,
      last_name,
      email,
      phone_number,
      location,
      bio,
      github,
      linkedin,
      password,
    } = updatedProfile

    res.status(201).json({
      id,
      first_name,
      last_name,
      email,
      phone_number,
      location,
      bio,
      github,
      linkedin,
      password,
    })
  } else {
    res.status(404)
    throw new Error('Profile not found')
  }
})

// @desc  Delete profile
// @route GET /api/profile
// @access Private
const deleteProfile = asyncHandler(async (req, res) => {
  await Profile.destroy()

  res.json({ message: 'Profile deleted' })
})

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
