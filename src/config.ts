import fs from 'fs'
import logger from './utils/logger'

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const dotenv = require('dotenv')
  const envFilePath = process.cwd() + '/.env'

  if (!fs.existsSync(envFilePath)) {
    console.error(`no .env file found in path ${envFilePath}`)
    process.exit(1)
  }

  logger.info('loading .env file...')
  const result = dotenv.config({
    path: envFilePath
  })

  if (result.error) {
    console.error(result.error)
    process.exit(1)
  }
}

export const port: number | string = process.env.PORT ?? 5000
export const nodeEnv: 'development' | 'production' = process.env.NODE_ENV as 'development' | 'production' ?? 'development'
export const mysqlConfig = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}
