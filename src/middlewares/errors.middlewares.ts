import { NOT_FOUND } from '../config'
import ErrorHandler from '../errors/ErrorHandler'

export const errorPageNotFound: Handler = (req, res, _next) => {
  return res.status(NOT_FOUND).json({
    status: 'error',
    url: req.url,
    message: 'page not found',
  })
}

export const errorRoutes = (
  error: ErrorHandler,
  _req: Request,
  res: Response,
  _next: Next
) => {
  const { statusCode, message } = error
  return res.status(statusCode).json({
    status: 'error',
    message,
  })
}
