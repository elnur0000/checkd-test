import { Schema } from 'joi'

export type JoiSchemaMap<T> = {
  [Property in keyof T]: Schema
}
