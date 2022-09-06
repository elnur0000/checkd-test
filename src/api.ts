import express from 'express'
import http from 'http'
import * as config from './config'
import ErrorHandlingMiddleware from './middleware/error-handling'
import CommonMiddleware from './middleware/common'
import logger from './utils/logger'
import sequelize from './db/sequelize'
import StatsRouter from './domain/stats/router'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'

async function bootstrap (): Promise<http.Server> {
  const app = express()

  CommonMiddleware(app)

  app.use('/api-docs', swaggerUi.serve)
  app.get('/api-docs', swaggerUi.setup(swaggerDocument))
  app.get('/health-check', (req, res) => {
    res.send()
  })
  app.use(StatsRouter)

  ErrorHandlingMiddleware(app)

  const port = config.port

  const server = http.createServer(app)

  logger.info('checking database connection...')
  await sequelize.authenticate()

  server.listen(port)
  server.on('listening', () => logger.info(`🚀  Server is listening on port ${port}`))

  return server
}

export default bootstrap
