import * as config from '../config'
import logger from '../utils/logger'
import {
  AccessDeniedError,
  AuthenticationError,
  NotFoundError,
  BadRequestError
} from '../errors'
import {
  Express,
  ErrorRequestHandler
} from 'express'

const errorLogger: ErrorRequestHandler = (err: Error, req, res, next) => {
  logger.error(err)
  next(err)
}

const authenticationErrorHandler: ErrorRequestHandler = (err: Error, req, res, next) => {
  if (err instanceof AuthenticationError) {
    return res.status(401).send({ error: { message: err.message, errorCode: err.errorCode } })
  }
  next(err)
}

const notFoundErrorHandler: ErrorRequestHandler = (err: Error, req, res, next) => {
  if (err instanceof NotFoundError) {
    return res.status(404).send({ error: { message: err.message, errorCode: err.errorCode } })
  }
  next(err)
}

const validationErrorHandler: ErrorRequestHandler = (err: Error, req, res, next) => {
  if (err instanceof BadRequestError) {
    return res.status(400).send({ error: { message: err.message, errorCode: err.errorCode } })
  }
  next(err)
}

const accessDeniedErrorHandler: ErrorRequestHandler = (err: Error, req, res, next) => {
  if (err instanceof AccessDeniedError) {
    return res.status(403).send({ error: { message: err.message, errorCode: err.errorCode } })
  }
  next(err)
}
const genericErrorHandler: ErrorRequestHandler = (err: Error, req, res, next) => {
  res.status(500).send({ error: { message: config.nodeEnv === 'development' ? err.message || 'Something went wrong with a server' : err.message } })
  next()
}

export default (app: Express): void => {
  app.use([
    errorLogger,
    authenticationErrorHandler,
    validationErrorHandler,
    notFoundErrorHandler,
    accessDeniedErrorHandler,
    genericErrorHandler
  ])
}
