import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/connection.js'

class Project extends Model {}

Project.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    repo_link: {
      type: DataTypes.STRING,
    },
    deployed_link: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Project',
    freezeTableName: true,
    underscored: true,
  }
)

export default Project
