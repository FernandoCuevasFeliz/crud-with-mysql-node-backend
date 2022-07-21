// import types of libs
type Handler = import('express').Handler
type Response = import('express').Response
type Request = import('express').Request
type Next = import('express').NextFunction

// interfaces
interface Task {
  id: number
  taskId: string
  title: string
  description: string
}

// types
type CreateTask = Omit<Task, 'id' | 'taskId' | 'description'> & {
  description?: string
}

type UpdateTask = Omit<Partial<Task>, 'id'>
