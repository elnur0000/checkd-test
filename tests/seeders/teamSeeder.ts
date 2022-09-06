import dbConnections from '../db-connections'
import {
  objToSqlInsert
} from '../helpers'

export interface TeamsAttributes {
  id?: number
  uuid: string
  name?: string
  shortName?: string
  abbr?: string
  added: string
  updated: string
}

class TeamSeeder {
  public async run (team: TeamsAttributes): Promise<void> {
    await dbConnections.sql.query(objToSqlInsert('practical.teams', team))
  }

  public async clean (): Promise<void> {
    await dbConnections.sql.query('DELETE FROM practical.teams')
  }
}

export const teamSeeder = new TeamSeeder()
