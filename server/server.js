import express from 'express'
import sequelize from './config/connection.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import profileRoutes from './routes/profileRoutes.js'
import projectRoutes from './routes/projectRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

const app = express()

app.use(express.json())

app.use('/api/profile', profileRoutes)

app.use('/api/projects', projectRoutes)

app.use('/api/upload', uploadRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, console.log(`Server running on port ${PORT}`))
})
