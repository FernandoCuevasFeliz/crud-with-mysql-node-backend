import { BAD_REQUEST, NOT_FOUND } from '../config'
import ErrorHandler from './ErrorHandler'

export class TaskNotFoundError extends ErrorHandler {
  constructor() {
    super(NOT_FOUND, 'Task not found')
  }
}

export class TaskExistError extends ErrorHandler {
  constructor() {
    super(BAD_REQUEST, 'Task already exist')
  }
}
