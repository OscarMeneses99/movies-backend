
import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './docs/swagger.js'
import movies from './routes/movies.routes.js'

const app = express()

//disable x-powered-by: express
app.disable('x-powered-by')

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/movies', movies)
//Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default app