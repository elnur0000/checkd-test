import {
  NextFunction,
  Request,
  Response,
  RequestHandler
} from 'express'

type FunctionChangedReturn<TFn, TR> = TFn extends (...a: infer A) => any ? (...a: A) => TR : never
type CustomRequestHandler = FunctionChangedReturn<RequestHandler, Promise<void> | void>

export default (fn: CustomRequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // @ts-expect-error
    return fn(req, res, next).catch(next)
  }
}
