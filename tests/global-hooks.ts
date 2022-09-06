import bootstrap from '../src/api'
import dbConnections from './db-connections'

export const mochaGlobalSetup = async function (): Promise<void> {
  [this.server] = await Promise.all(
    [
      bootstrap(),
      dbConnections.connect()
    ]
  )
}

export const mochaGlobalTeardown = async function (): Promise<void> {
  await this.server.close()
  await dbConnections.disconnect()
}
