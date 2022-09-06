import { players } from '../../models/players'
import { monthPlayers } from '../../models/monthPlayers'
import { seasonPlayers } from '../../models/seasonPlayers'
import { weekPlayers } from '../../models/weekPlayers'
import {
  GetStatsByPeriodParamsDto
} from './dto'
import { teams } from '../../models/teams'

export const getStats = async (period: GetStatsByPeriodParamsDto['period'], weekId?: string, monthId?: string): Promise<seasonPlayers[] | monthPlayers[] | weekPlayers[]> => {
  switch (period) {
    case 'season': {
      return await seasonPlayers.findAll({
        include: [
          {
            model: players,
            include: [
              {
                model: teams,
                attributes: ['id', 'name']
              }
            ]
          }
        ]
      })
    }
    case 'month': {
      return await monthPlayers.findAll({
        where: {
          monthId
        },
        include: [
          {
            model: players,
            include: [
              {
                model: teams,
                attributes: ['id', 'name']
              }
            ]
          }
        ]
      })
    }
    case 'week': {
      return await weekPlayers.findAll({
        where: {
          weekId
        },
        include: [
          {
            model: players,
            include: [
              {
                model: teams,
                attributes: ['id', 'name']
              }
            ]
          }
        ]
      })
    }
    default: {
      return []
    }
  }
}

export interface PlayerStats {
  teamName?: string
  savesTier2?: number
  lastName?: string
  savesTier1?: number
  subs?: number
  motms?: number
  points?: number
  redCards?: number
  concedes?: number
  assists?: number
  shotsTier1?: number
  shotsTier2?: number
  id: number
  starts?: number
  goals?: number
  tacklesTier1?: number
  tacklesTier2?: number
  ownGoals?: number
  cleansheets?: number
  penSaves?: number
  firstName?: string
  penMisses?: number
  passesTier1?: number
  position?: string
  passesTier2?: number
  yellowCards?: number
}

export const processStats = (stats: seasonPlayers[] | monthPlayers[] | weekPlayers[]): PlayerStats[] => {
  const result: PlayerStats[] = []
  for (const stat of stats) {
    const player = stat.player
    const team = player.team
    const teamName = team ? team.name : ''
    const {
      savesTier2,
      savesTier1,
      subs,
      motms,
      points,
      redCards,
      concedes,
      assists,
      shotsTier1,
      shotsTier2,
      id,
      starts,
      goals,
      tacklesTier1,
      tacklesTier2,
      ownGoals,
      cleansheets,
      penSaves,
      penMisses,
      passesTier1,
      passesTier2,
      yellowCards
    } = stat

    const {
      firstName,
      position,
      lastName
    } = player

    result.push({
      teamName,
      savesTier2,
      lastName,
      savesTier1,
      subs,
      motms,
      points,
      redCards,
      concedes,
      assists,
      shotsTier1,
      shotsTier2,
      id,
      starts,
      goals,
      tacklesTier1,
      tacklesTier2,
      ownGoals,
      cleansheets,
      penSaves,
      firstName,
      penMisses,
      passesTier1,
      position,
      passesTier2,
      yellowCards
    })
  }

  return result
}
