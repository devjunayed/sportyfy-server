import express, { Application } from 'express'
import router from './app/routes'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorhandler'
import { notFound } from './app/middlewares/notFound'

// creating app
const app: Application = express()

// cors
app.use(cors({
  origin: ['http://localhost:5173', 'https://sportyfy.devjunayed.xyz'],
  methods: ["GET", "POST", "PUT", "UPDATE", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}))


// middlewares for getting data from the frontend
app.use(express.json())

// tes route
app.get('/', (req, res) => {
  res.json({
    message: 'Server is running',
  })
})

// using routes
app.use('/api/', router)

// global error handler
app.use(globalErrorHandler)

// api not found
app.use(notFound)

export default app
