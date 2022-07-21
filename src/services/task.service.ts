import { v4 as uuidv4 } from 'uuid'
import { connectionDB } from '../database'
import { TaskNotFoundError } from '../errors/tasks.errors'

export default class TaskService {
  static async create(taskData: CreateTask) {
    const { title, description } = taskData
    const [result] = await connectionDB.query('call createTask(?,?,?)', [
      uuidv4(),
      title,
      description,
    ])

    return result[0][0]
  }

  static async getAll() {
    const [result] = await connectionDB.query('call findAllTasks()')

    return result[0]
  }

  static async getOneByTaskId(id: string) {
    const [result] = await connectionDB.query('call findTaskByTaskId(?)', [id])

    return result[0][0]
  }

  static async getOneByTitle(title: string) {
    const [result] = await connectionDB.query('call findTaskByTitle(?)', [
      title,
    ])

    return result[0][0]
  }
  static async delete(id: string) {
    const task = await this.getOneByTaskId(id)

    if (!task) throw new TaskNotFoundError()

    const [result] = await connectionDB.query('call deleteTaskByTaskId(?)', [
      id,
    ])

    return result[0][0]
  }

  static async update(taskData: UpdateTask) {
    const { taskId, title, description } = taskData

    const task = await this.getOneByTaskId(taskId)

    if (!task) throw new TaskNotFoundError()

    const [result] = await connectionDB.query('call updateTask(?,?,?)', [
      taskId,
      title,
      description,
    ])

    return result[0][0]
  }
}
