import path from 'path'
import express from 'express'
import sequelize from './config/connection.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import profileRoutes from './routes/profileRoutes.js'
import projectRoutes from './routes/projectRoutes.js'
import imageRoutes from './routes/imageRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/profile', profileRoutes)

app.use('/api/projects', projectRoutes)

app.use('/api/image', imageRoutes)

app.use('/api/contact', contactRoutes)

const PORT = process.env.PORT || 5000

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  console.log('In production mode')
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
} else {
  console.log('Not in production mode')
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

app.use(notFound)

app.use(errorHandler)

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, console.log(`Server running on port ${PORT}`))
})
