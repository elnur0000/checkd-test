import dbConnections from '../db-connections'
import {
  objToSqlInsert
} from '../helpers'

export interface PlayersAttributes {
  id?: number
  uuid: string
  teamId?: number
  firstName?: string
  lastName?: string
  position?: string
  added: string
  updated: string
}

class PlayerSeeder {
  public async run (player: PlayersAttributes): Promise<void> {
    await dbConnections.sql.query(objToSqlInsert('practical.players', player))
  }

  public async clean (): Promise<void> {
    await dbConnections.sql.query('DELETE FROM practical.players')
  }
}

export const playerSeeder = new PlayerSeeder()
