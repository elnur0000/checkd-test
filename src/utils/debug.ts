import logger from './logger'
import sequelize from '../db/sequelize'

export async function shutdown (payload?: any, description = ''): Promise<void> {
  if (payload) {
    logger.error(payload, description)
  }

  await sequelize.close()
  return process.exit(1)
}
