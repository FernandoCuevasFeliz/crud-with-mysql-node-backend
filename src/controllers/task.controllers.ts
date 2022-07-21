import { TaskNotFoundError } from '../errors/tasks.errors'
import TaskService from '../services/task.service'

export default class TaskController {
  static createTask: Handler = async (req, res) => {
    const { title, description } = req.body
    const task = await TaskService.create({ title, description })

    return res.status(200).json({
      status: 'Ok',
      message: 'Task created',
      task,
    })
  }

  static getTasks: Handler = async (req, res) => {
    const tasks = await TaskService.getAll()

    return res.status(200).json({
      status: 'Ok',
      tasks,
    })
  }

  static getTask: Handler = async (req, res) => {
    const { value } = req.params

    const task =
      (await TaskService.getOneByTaskId(value)) ||
      (await TaskService.getOneByTitle(value))

    if (!task) {
      throw new TaskNotFoundError()
    }

    return res.status(200).json({
      status: 'Ok',
      message: 'Task found',
      task,
    })
  }

  static updateTask: Handler = async (req, res) => {
    const { id } = req.params
    const { title, description } = req.body
    const task = await TaskService.update({
      taskId: id,
      title,
      description,
    })

    return res.status(200).json({
      status: 'Ok',
      message: 'Task updated',
      task,
    })
  }

  static deleteTask: Handler = async (req, res) => {
    const { id } = req.params
    const task = await TaskService.delete(id)

    return res.status(200).json({
      status: 'Ok',
      message: 'Task deleted',
      task,
    })
  }
}
