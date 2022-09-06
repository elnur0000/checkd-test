export default class BadRequestError extends Error {
  constructor (public message: string = 'Bad request', public errorCode = 'BAD_REQUEST') {
    super(message)
  }
}
