import Profile from './Profile'
import Project from './Project'
import Skill from './Skill'

Profile.hasMany(Skill, {
  foreignKey: 'profile_id',
})

Skill.belongsTo(Profile, {
  foreignKey: 'profile_id',
})

export { Profile, Project, Skill }
