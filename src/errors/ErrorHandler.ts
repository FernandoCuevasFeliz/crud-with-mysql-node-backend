export default class ErrorHandler extends Error {
  statusCode: number

  constructor(statusCode: number, message: string, trace: string = '') {
    super()
    this.message = message
    this.statusCode = statusCode
    this.stack = trace
  }
}
