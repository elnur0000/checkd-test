/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  generateSqlDate
} from './helpers'
import { MonthPlayersAttributes } from './seeders/monthPlayers'
import { PlayersAttributes } from './seeders/playerSeeder'
import { SeasonPlayersAttributes } from './seeders/seasonPlayers'
import { TeamsAttributes } from './seeders/teamSeeder'
import { WeekPlayersAttributes } from './seeders/weekPlayers'

export const team: TeamsAttributes = {
  id: 1,
  abbr: 'ARS',
  name: 'Arsenal',
  shortName: 'Arsenal',
  uuid: 'team-uuid',
  added: generateSqlDate(),
  updated: generateSqlDate()
}
export const player: PlayersAttributes = {
  id: 1,
  uuid: '1',
  firstName: 'player-first-name',
  lastName: 'player-last-name',
  position: 'DEF',
  teamId: 1,
  added: generateSqlDate(),
  updated: generateSqlDate()
}

export const seasonPlayer: SeasonPlayersAttributes = {
  playerId: 1,
  added: generateSqlDate(),
  updated: generateSqlDate(),
  points: 1,
  starts: 1,
  subs: 2,
  goals: 1,
  ownGoals: 5,
  assists: 1,
  concedes: 4,
  cleansheets: 3,
  redCards: 1,
  yellowCards: 1,
  penSaves: 3,
  penMisses: 1,
  savesTier1: 1,
  savesTier2: 7,
  passesTier1: 1,
  passesTier2: 8,
  tacklesTier1: 4,
  tacklesTier2: 6,
  shotsTier1: 0,
  shotsTier2: 1,
  motms: 1
}

export const monthPlayer: MonthPlayersAttributes = {
  monthId: 1,
  playerId: 1,
  added: generateSqlDate(),
  updated: generateSqlDate(),
  points: 1,
  starts: 1,
  subs: 6,
  goals: 1,
  ownGoals: 6,
  assists: 1,
  concedes: 4,
  cleansheets: 7,
  redCards: 1,
  yellowCards: 1,
  penSaves: 3,
  penMisses: 1,
  savesTier1: 1,
  savesTier2: 7,
  passesTier1: 1,
  passesTier2: 3,
  tacklesTier1: 4,
  tacklesTier2: 3,
  shotsTier1: 0,
  shotsTier2: 1,
  motms: 1
}

export const weekPlayer: WeekPlayersAttributes = {
  weekId: 1,
  playerId: 1,
  added: generateSqlDate(),
  updated: generateSqlDate(),
  points: 1,
  starts: 1,
  subs: 6,
  goals: 1,
  ownGoals: 6,
  assists: 1,
  concedes: 4,
  cleansheets: 7,
  redCards: 1,
  yellowCards: 1,
  penSaves: 6,
  penMisses: 1,
  savesTier1: 1,
  savesTier2: 7,
  passesTier1: 1,
  passesTier2: 3,
  tacklesTier1: 7,
  tacklesTier2: 3,
  shotsTier1: 0,
  shotsTier2: 1,
  motms: 1
}
