import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/connection'

class Skill extends Model {}

Skill.init(
  {
    skill_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
    },
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Profile',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Skill',
    freezeTableName: true,
    underscored: true,
  }
)

export default Skill
