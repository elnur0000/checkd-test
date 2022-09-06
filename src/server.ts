import bootstrapApi from './api'
import { shutdown } from './utils/debug'
import logger from './utils/logger'

bootstrapApi()
  .then(() => {
    process.on('SIGINT', () => {
      logger.info('Received SIGINT')
      logger.info('Exiting...')

      void shutdown()
    })

    process.on('SIGTERM', () => {
      logger.info('Received SIGTERM')
      logger.info('Exiting...')

      void shutdown()
    })

    process.on('SIGUSR2', () => {
      logger.info('Received SIGUSR2')
      logger.info('Exiting...')

      void shutdown()
    })
  })
  .catch(async err => await shutdown(err, 'bootstrapping error'))
