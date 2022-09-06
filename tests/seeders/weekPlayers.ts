import dbConnections from '../db-connections'
import {
  objToSqlInsert
} from '../helpers'

export interface WeekPlayersAttributes {
  weekId: number
  playerId: number
  points?: number
  starts?: number
  subs?: number
  goals?: number
  ownGoals?: number
  assists?: number
  concedes?: number
  cleansheets?: number
  redCards?: number
  yellowCards?: number
  penSaves?: number
  penMisses?: number
  savesTier1?: number
  savesTier2?: number
  passesTier1?: number
  passesTier2?: number
  tacklesTier1?: number
  tacklesTier2?: number
  shotsTier1?: number
  shotsTier2?: number
  motms?: number
  added: string
  updated: string
}

class WeekPlayerSeeder {
  public async run (weekPlayer: WeekPlayersAttributes): Promise<void> {
    await dbConnections.sql.query(objToSqlInsert('practical.weekPlayers', weekPlayer))
  }

  public async clean (): Promise<void> {
    await dbConnections.sql.query('DELETE FROM practical.weekPlayers')
  }
}

export const weekPlayerSeeder = new WeekPlayerSeeder()
