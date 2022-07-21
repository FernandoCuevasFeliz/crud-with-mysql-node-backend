import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'

import { port } from './config'
import routes from './routes'
import {
  errorPageNotFound,
  errorRoutes,
} from './middlewares/errors.middlewares'

const app = express()

// settings
app.set('port', port)

// middlewares
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/', routes)

// errors handlers
app.use(errorPageNotFound)
app.use(errorRoutes)

export default app
