import { Router } from 'express'
import TaskController from '../controllers/task.controllers'
import { handlerError } from '../errors'
import {
  createTaskValidator,
  updateTaskValidator,
} from '../validators/task.validator'

const router = Router()

router
  .route('/')
  .get(handlerError(TaskController.getTasks))
  .post(createTaskValidator, handlerError(TaskController.createTask))

router.get('/:value', handlerError(TaskController.getTask))

router
  .route('/:id')
  .put(updateTaskValidator, handlerError(TaskController.updateTask))
  .delete(handlerError(TaskController.deleteTask))

export default router
