import path from 'path'
import { Sequelize } from 'sequelize-typescript'
import * as config from '../config'

export default new Sequelize({
  database: config.mysqlConfig.database,
  dialect: 'mysql',
  username: config.mysqlConfig.user,
  password: config.mysqlConfig.password,
  host: config.mysqlConfig.host,
  logging: false,
  models: [path.join(__dirname, '..', 'models')]
})
