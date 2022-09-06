/* eslint-disable @typescript-eslint/no-floating-promises */
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import {
  axiosInstance
} from './helpers'
import { monthPlayer, player, seasonPlayer, team, weekPlayer } from './mocks'
import { monthPlayerSeeder } from './seeders/monthPlayers'
import { playerSeeder } from './seeders/playerSeeder'
import { seasonPlayerSeeder } from './seeders/seasonPlayers'
import { teamSeeder } from './seeders/teamSeeder'
import { weekPlayerSeeder } from './seeders/weekPlayers'
chai.use(chaiAsPromised)

const { expect } = chai

describe('GET /stats/:period', () => {
  describe('when period is week', () => {
    describe("when weekId isn't provided", () => {
      it('should return 400', async () => {
        const response = axiosInstance.get('/stats/week')
        expect(response).eventually.rejectedWith('Request failed with status code 400')
      })
    })

    describe('when weekId is provided', () => {
      describe('when weekId is invalid', () => {
        it('should return 400', async () => {
          const response = axiosInstance.get('/stats/week?weekId=40')
          expect(response).eventually.rejectedWith('Request failed with status code 400')
        })
      })

      describe('when weekId is valid', () => {
        describe('when week data is not found', () => {
          it('should return empty array', async () => {
            const response = axiosInstance.get('/stats/week?weekId=1')
            expect(response).eventually.deep.equal([])
          })
        })

        describe('when week data is found', () => {
          before(async () => {
            await teamSeeder.run(team)
            await playerSeeder.run(player)
            await weekPlayerSeeder.run(weekPlayer)
          })

          after(async () => {
            await weekPlayerSeeder.clean()
            await playerSeeder.clean()
            await teamSeeder.clean()
          })

          it('should return valid data', async () => {
            const response = await axiosInstance.get('/stats/week?weekId=1')
            expect(response.status).to.equal(200)
            expect(response.data).to.deep.equal({
              period: 'week',
              stats: [
                {
                  teamName: team.name,
                  savesTier2: weekPlayer.savesTier2,
                  lastName: player.lastName,
                  savesTier1: weekPlayer.savesTier1,
                  subs: weekPlayer.subs,
                  motms: weekPlayer.motms,
                  points: weekPlayer.points,
                  redCards: weekPlayer.redCards,
                  concedes: weekPlayer.concedes,
                  assists: weekPlayer.assists,
                  shotsTier1: weekPlayer.shotsTier1,
                  shotsTier2: weekPlayer.shotsTier2,
                  starts: weekPlayer.starts,
                  goals: weekPlayer.goals,
                  tacklesTier1: weekPlayer.tacklesTier1,
                  tacklesTier2: weekPlayer.tacklesTier2,
                  ownGoals: weekPlayer.ownGoals,
                  cleansheets: weekPlayer.cleansheets,
                  penSaves: weekPlayer.penSaves,
                  firstName: player.firstName,
                  penMisses: weekPlayer.penMisses,
                  passesTier1: weekPlayer.passesTier1,
                  position: player.position,
                  passesTier2: weekPlayer.passesTier2,
                  yellowCards: weekPlayer.yellowCards
                }
              ]
            })
          })
        })
      })
    })
  })

  describe("when period is month, but monthId isn't provided", () => {
    describe("when monthId isn't provided", () => {
      it('should return 400', async () => {
        const response = axiosInstance.get('/stats/month')
        expect(response).eventually.rejectedWith('Request failed with status code 400')
      })
    })

    describe('when monthId is provided', () => {
      describe('when monthId is invalid', () => {
        it('should return 400', async () => {
          const response = axiosInstance.get('/stats/month?monthId=13')
          expect(response).eventually.rejectedWith('Request failed with status code 400')
        })
      })

      describe('when monthId is valid', () => {
        describe('when month data is not found', () => {
          it('should return empty array', async () => {
            const response = axiosInstance.get('/stats/month?monthId=1')
            expect(response).eventually.deep.equal([])
          })
        })

        describe('when month data is found', () => {
          before(async () => {
            await teamSeeder.run(team)
            await playerSeeder.run(player)
            await monthPlayerSeeder.run(monthPlayer)
          })

          after(async () => {
            await monthPlayerSeeder.clean()
            await playerSeeder.clean()
            await teamSeeder.clean()
          })

          it('should return valid data', async () => {
            const response = await axiosInstance.get('/stats/month?monthId=1')
            expect(response.status).to.equal(200)
            expect(response.data).to.deep.equal({
              period: 'month',
              stats: [
                {
                  teamName: team.name,
                  savesTier2: monthPlayer.savesTier2,
                  lastName: player.lastName,
                  savesTier1: monthPlayer.savesTier1,
                  subs: monthPlayer.subs,
                  motms: monthPlayer.motms,
                  points: monthPlayer.points,
                  redCards: monthPlayer.redCards,
                  concedes: monthPlayer.concedes,
                  assists: monthPlayer.assists,
                  shotsTier1: monthPlayer.shotsTier1,
                  shotsTier2: monthPlayer.shotsTier2,
                  starts: monthPlayer.starts,
                  goals: monthPlayer.goals,
                  tacklesTier1: monthPlayer.tacklesTier1,
                  tacklesTier2: monthPlayer.tacklesTier2,
                  ownGoals: monthPlayer.ownGoals,
                  cleansheets: monthPlayer.cleansheets,
                  penSaves: monthPlayer.penSaves,
                  firstName: player.firstName,
                  penMisses: monthPlayer.penMisses,
                  passesTier1: monthPlayer.passesTier1,
                  position: player.position,
                  passesTier2: monthPlayer.passesTier2,
                  yellowCards: monthPlayer.yellowCards
                }
              ]
            })
          })
        })
      })
    })
  })

  describe('when period is invalid', () => {
    it('should return 400', async () => {
      const response = axiosInstance.get('/stats/asdasd')
      expect(response).eventually.rejectedWith('Request failed with status code 400')
    })
  })

  describe('when period is season', () => {
    beforeEach(async () => {
      await teamSeeder.run(team)
      await playerSeeder.run(player)
      await seasonPlayerSeeder.run(seasonPlayer)
    })

    afterEach(async () => {
      await seasonPlayerSeeder.clean()
      await playerSeeder.clean()
      await teamSeeder.clean()
    })
    it('should return valid data', async () => {
      const response = await axiosInstance.get('/stats/season')
      expect(response.status).to.equal(200)
      expect(response.data).to.deep.equal({
        period: 'season',
        stats: [
          {
            teamName: team.name,
            savesTier2: seasonPlayer.savesTier2,
            lastName: player.lastName,
            savesTier1: seasonPlayer.savesTier1,
            subs: seasonPlayer.subs,
            motms: seasonPlayer.motms,
            points: seasonPlayer.points,
            redCards: seasonPlayer.redCards,
            concedes: seasonPlayer.concedes,
            assists: seasonPlayer.assists,
            shotsTier1: seasonPlayer.shotsTier1,
            shotsTier2: seasonPlayer.shotsTier2,
            starts: seasonPlayer.starts,
            goals: seasonPlayer.goals,
            tacklesTier1: seasonPlayer.tacklesTier1,
            tacklesTier2: seasonPlayer.tacklesTier2,
            ownGoals: seasonPlayer.ownGoals,
            cleansheets: seasonPlayer.cleansheets,
            penSaves: seasonPlayer.penSaves,
            firstName: player.firstName,
            penMisses: seasonPlayer.penMisses,
            passesTier1: seasonPlayer.passesTier1,
            position: player.position,
            passesTier2: seasonPlayer.passesTier2,
            yellowCards: seasonPlayer.yellowCards
          }
        ]
      })
    })
  })
})
