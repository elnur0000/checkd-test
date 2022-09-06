import dbConnections from '../db-connections'
import {
  objToSqlInsert
} from '../helpers'

export interface MonthPlayersAttributes {
  monthId: number
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

class MonthPlayerSeeder {
  public async run (monthPlayer: MonthPlayersAttributes): Promise<void> {
    await dbConnections.sql.query(objToSqlInsert('practical.monthPlayers', monthPlayer))
  }

  public async clean (): Promise<void> {
    await dbConnections.sql.query('DELETE FROM practical.monthPlayers')
  }
}

export const monthPlayerSeeder = new MonthPlayerSeeder()
