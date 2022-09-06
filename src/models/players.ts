import { BelongsTo, Column, DataType, ForeignKey, Index, Model, Table } from 'sequelize-typescript'
import { teams } from './teams'

export interface playersAttributes {
  id?: number
  uuid: string
  teamId?: number
  firstName?: string
  lastName?: string
  position?: string
  added: Date
  updated: Date
}

@Table({ tableName: 'players', timestamps: false })
export class players extends Model<playersAttributes, playersAttributes> implements playersAttributes {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
    id?: number

  @Column({ type: DataType.STRING(45) })
  @Index({ name: 'uuid_UNIQUE', using: 'BTREE', order: 'ASC', unique: true })
    uuid!: string

  @BelongsTo(() => teams, 'teamId')
    team: teams

  @ForeignKey(() => teams)
  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
  @Index({ name: 'teamId_idx', using: 'BTREE', order: 'ASC', unique: false })
    teamId?: number

  @Column({ allowNull: true, type: DataType.STRING(128) })
    firstName?: string

  @Column({ allowNull: true, type: DataType.STRING(128) })
    lastName?: string

  @Column({ allowNull: true, type: DataType.ENUM('GK', 'DEF', 'MID', 'FOR') })
    position?: string

  @Column({ type: DataType.DATE })
    added!: Date

  @Column({ type: DataType.DATE })
    updated!: Date
}
