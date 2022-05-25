import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

let sequelize

if (process.env.HEROKU_POSTGRES_URI) {
  sequelize = new Sequelize(process.env.HEROKU_POSTGRES_URI)
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'postgres',
      port: 5432,
    }
  )
}

export default sequelize
