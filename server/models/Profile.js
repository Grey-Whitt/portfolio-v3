import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/connection.js'

class Profile extends Model {}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    bio: {
      type: DataTypes.STRING(2000),
    },
    github: {
      type: DataTypes.STRING,
    },
    linkedin: {
      type: DataTypes.STRING,
    },
    resume: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Profile',
    freezeTableName: true,
    underscored: true,
    onDelete: 'cascade',
  }
)

export default Profile
