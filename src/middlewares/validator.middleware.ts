import { validationResult } from 'express-validator'
import { BAD_REQUEST } from '../config'

export const handlerValidator = (validations: any[]): Handler => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)))

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(BAD_REQUEST).json({
        status: 'error',
        errors: errors.array(),
      })
    }

    return next()
  }
}
