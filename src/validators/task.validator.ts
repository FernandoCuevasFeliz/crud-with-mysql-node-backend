import { check } from 'express-validator'
import { handlerValidator } from '../middlewares/validator.middleware'

const createTask = [check('title', 'title is required').notEmpty()]
const updateTask = [
  check('title', 'title is required'),
  check('description', 'description is required'),
]

export const createTaskValidator = handlerValidator(createTask)
export const updateTaskValidator = handlerValidator(updateTask)
