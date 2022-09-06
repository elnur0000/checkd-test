import express from 'express'
import * as controller from './controller'
import validator from '../../middleware/validator'
import * as validationSchemas from './validation-schema'

const router = express.Router()

router.get('/stats/:period', validator({
  params: validationSchemas.getStatsByPeriodParams,
  query: validationSchemas.getStatsByPeriodQueryParams
}), controller.getByPeriod)

export default router
