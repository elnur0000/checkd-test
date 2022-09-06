/* eslint-disable @typescript-eslint/consistent-type-assertions */
import Joi from 'joi'
import { JoiSchemaMap } from '../../types'
import { GetStatsByPeriodParamsDto, GetStatsByPeriodQueryParamsDto } from './dto'

export const getStatsByPeriodParams = Joi.object().keys(
  {
    period: Joi.string().valid('week', 'month', 'season').required()
  } as JoiSchemaMap<GetStatsByPeriodParamsDto>
)

export const getStatsByPeriodQueryParams = Joi.object().keys(
  {
    weekId: Joi.string().pattern(/^([1-9]|[12][0-9]|3[0-7])$/).message('weekId must be between 1 and 37').optional(),
    monthId: Joi.string().regex(/^([1-9]|1[0-2])$/).message('monthId must be between 1 and 12').optional()
  } as JoiSchemaMap<GetStatsByPeriodQueryParamsDto>
)
