import axios from 'axios'
export const axiosInstance = axios.create({
  baseURL: `http://localhost:${process.env.PORT as string}`
})

export const objToSqlInsert = (tableName: string, data: any): string => {
  const columns = Object.keys(data).map((val) => `\`${val}\``).join(',')
  const values = Object.values(data).map(val => {
    switch (typeof val) {
      case 'string':
        return `'${val}'`
      case 'number':
        return val
      case 'object':
        return 'null'
      default:
        return 'null'
    }
  }).join(',')
  return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`
}

export const generateSqlDate = (): string => {
  return new Date().toISOString().slice(0, 19).replace('T', ' ')
}
