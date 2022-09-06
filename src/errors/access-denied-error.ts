export default class AccessDeniedError extends Error {
  constructor (public message: string = 'You are not authorized', public errorCode = 'ACCESS_DENIED') {
    super(message)
  }
}
