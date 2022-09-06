import { Column, DataType, Index, Model, Table } from 'sequelize-typescript'

export interface teamsAttributes {
  id?: number
  uuid: string
  name?: string
  shortName?: string
  abbr?: string
  added: Date
  updated: Date
}

@Table({ tableName: 'teams', timestamps: false })
export class teams extends Model<teamsAttributes, teamsAttributes> implements teamsAttributes {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
    id?: number

  @Column({ type: DataType.STRING(45) })
  @Index({ name: 'uuid_UNIQUE', using: 'BTREE', order: 'ASC', unique: true })
    uuid!: string

  @Column({ allowNull: true, type: DataType.STRING(64) })
    name?: string

  @Column({ allowNull: true, type: DataType.STRING(64) })
    shortName?: string

  @Column({ allowNull: true, type: DataType.STRING(3) })
    abbr?: string

  @Column({ type: DataType.DATE })
    added!: Date

  @Column({ type: DataType.DATE })
    updated!: Date
}
