import asyncHandler from 'express-async-handler'
import { Profile, Skill } from '../models/index.js'

// @desc  Fetch profile
// @route GET /api/profile
// @access Public
const getProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne({
    include: {
      model: Skill,
      attributes: [
        ['skill_name', 'skillName'],
        'type',
        ['profile_id', 'profileId'],
      ],
    },
  })

  if (profile) {
    res.json({
      id: profile.id,
      firstName: profile.first_name,
      lastName: profile.last_name,
      email: profile.email,
      phoneNumber: profile.phone_number,
      location: profile.location,
      bio: profile.bio,
      github: profile.github,
      linkedin: profile.linkedin,
      password: profile.password,
      createdAt: profile.createdAt,
      updatedAt: profile.updatedAt,
      skills: profile.Skills,
    })
  } else {
    res.status(404)
    throw new Error('Profile not found')
  }
})

// @desc  Create profile
// @route POST /api/profile
// @access Private
const createProfile = asyncHandler(async (req, res) => {
  await Profile.destroy({
    where: {},
  })

  const {
    firstName: first_name,
    lastName: last_name,
    email,
    phoneNumber: phone_number,
    location,
    bio,
    github,
    linkedin,
    password,
  } = req.body

  const profile = await Profile.create({
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

  res.status(201).json({
    id: profile.id,
    firstName: profile.first_name,
    lastName: profile.last_name,
    email: profile.email,
    phoneNumber: profile.phone_number,
    location: profile.location,
    bio: profile.bio,
    github: profile.github,
    linkedin: profile.linkedin,
    password: profile.password,
    createdAt: profile.createdAt,
    updatedAt: profile.updatedAt,
  })
})

// @desc  Update profile
// @route PUT /api/profile/:id
// @access Private
const updateProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne({
    where: {
      id: req.params.id,
    },
  })

  const {
    firstName: first_name,
    lastName: last_name,
    email,
    phoneNumber: phone_number,
    location,
    bio,
    github,
    linkedin,
    password,
  } = req.body

  if (profile) {
    const updatedProfile = await Profile.update(
      {
        first_name,
        last_name,
        email,
        phone_number,
        location,
        bio,
        github,
        linkedin,
        password,
      },
      {
        plain: true,
        individualHooks: true,
        where: {
          id: req.params.id,
        },
      }
    )

    res.status(201).json(updatedProfile)
  } else {
    res.status(404)
    throw new Error('Profile not found')
  }
})

// @desc  Delete profile
// @route GET /api/profile
// @access Private
const deleteProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne()

  if (profile) {
    await Profile.destroy({
      where: {},
    })
  } else {
    res.status(404)
    throw new Error('Profile not found')
  }

  res.status(201).json({ message: 'Profile deleted' })
})

// @desc  Create skill
// @route POST /api/profile/skill
// @access Private
const createSkill = asyncHandler(async (req, res) => {
  const skill = await Skill.create({
    skill_name: req.body.skillName,
    type: req.body.type,
    profile_id: req.body.profileId,
  })

  res.status(201).json(skill)
})

// @desc  Delete skill
// @route DELETE /api/profile/skill/:id
// @access Private
const deleteSkill = asyncHandler(async (req, res) => {
  const skill = await Skill.findOne({
    where: {
      skill_name: req.params.name,
    },
  })

  if (skill) {
    await Skill.destroy({
      where: {
        skill_name: req.params.name,
      },
    })

    res.status(201).json({ message: 'Skill deleted' })
  } else {
    res.status(404)
    throw new Error('Skill not found')
  }
})

export {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
  createSkill,
  deleteSkill,
}
