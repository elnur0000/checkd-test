export default class AuthenticationError extends Error {
  constructor (public message: string = 'You are not authorized', public errorCode = 'AUTHENTICATION_ERROR') {
    super(message)
  }
}
