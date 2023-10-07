
import express from 'express'
import morgan from 'morgan'
import movies from './routes/movies.routes.js'

const app = express()

//disable x-powered-by: express
app.disable('x-powered-by')

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api', movies)

export default app