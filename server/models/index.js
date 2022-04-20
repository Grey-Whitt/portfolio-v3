import Profile from './Profile.js'
import Project from './Project.js'
import Skill from './Skill.js'

Profile.hasMany(Skill, {
  foreignKey: 'profile_id',
})

Skill.belongsTo(Profile, {
  foreignKey: 'profile_id',
})

export { Profile, Project, Skill }
