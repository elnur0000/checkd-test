import asyncWrapper from '../../utils/async-wrapper'
import { Request, Response } from 'express'
import { GetStatsByPeriodParamsDto, GetStatsByPeriodQueryParamsDto, Period } from './dto'
import {
  BadRequestError
} from '../../errors'
import * as service from './service'

interface GetStatsByPeriodResponse {
  period: Period
  stats: service.PlayerStats[]
}

export const getByPeriod = asyncWrapper(async (req: Request<GetStatsByPeriodParamsDto, {}, {}, GetStatsByPeriodQueryParamsDto>, res: Response<GetStatsByPeriodResponse>) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const period = req.params.period!

  const {
    weekId,
    monthId
  } = req.query

  if (period === 'month' && !monthId) {
    throw new BadRequestError('missing monthId in query params')
  }

  if (period === 'week' && !weekId) {
    throw new BadRequestError('missing weekId in query params')
  }

  const stats = await service.getStats(period, weekId, monthId)

  const processedStats = service.processStats(stats)

  res.send({
    period,
    stats: processedStats
  })
})
