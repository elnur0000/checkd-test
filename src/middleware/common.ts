import cors from 'cors'
import express, { Express } from 'express'
import expressWinston from 'express-winston'
import helmet from 'helmet'
import winston from 'winston'
import * as config from '../config'

export default function CommonMiddleware (app: Express): void {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
  app.use(helmet())
  app.use(expressWinston.logger(
    {
      transports: [
        new winston.transports.Console()
      ],
      format: config.nodeEnv === 'development'
        ? winston.format.combine(
          winston.format.colorize(),
          winston.format.simple()
        )
        : winston.format.json(),
      meta: config.nodeEnv === 'development',
      expressFormat: true,
      colorize: true
    }
  ))
}
