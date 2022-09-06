export default class NotFoundError extends Error {
  constructor (public message: string = 'Resource not found', public errorCode = 'NOT_FOUND') {
    super(message)
  }
}
