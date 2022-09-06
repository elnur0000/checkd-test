import { BadRequestError } from '../errors'
import { Schema, ValidationResult } from 'joi'
import { Request, Response, NextFunction } from 'express'

function validate (object: Object, validationSchema: Schema): ValidationResult<Object> {
  return validationSchema.validate(object, {
    allowUnknown: false
  })
}

interface ValidationMiddlewareOptions {
  body?: Schema
  params?: Schema
  query?: Schema
}

export default function ValidationMiddleware (schemas: ValidationMiddlewareOptions) {
  return (req: Request, res: Response, next: NextFunction) => {
    for (const [key, schema] of Object.entries(schemas)) {
      const target = req[key]
      const validationResult = validate(target, schema)
      if (validationResult.error) {
        throw new BadRequestError(validationResult.error.details[0].message)
      }
    }
    next()
  }
}
