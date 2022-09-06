import mysql from 'mysql2/promise'

class DbConnection {
  logger: any

  sql!: mysql.Connection

  private async connectMysql (): Promise<mysql.Connection> {
    return await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      database: process.env.MYSQL_DATABASE,
      password: process.env.MYSQL_PASSWORD
    })
  }

  async connect (): Promise<void> {
    [this.sql] = await Promise.all([
      this.connectMysql()
    ])
  }

  async disconnect (): Promise<void> {
    await Promise.all([
      this.sql.end()
    ])
  }
}

export default new DbConnection()
