import { INTERNAL_SERVER_ERROR } from '../config'
import ErrorHandler from './ErrorHandler'

const errorParse = (error: Error, next: Next) => {
  if (error instanceof ErrorHandler) {
    return next(error)
  }

  return next(
    new ErrorHandler(INTERNAL_SERVER_ERROR, 'Error performing action')
  )
}

export const handlerError = (handler: any): Handler => {
  return (req, res, next) => {
    try {
      handler(req, res)?.catch((error) => errorParse(error, next))
    } catch (error) {
      errorParse(error, next)
    }
  }
}
