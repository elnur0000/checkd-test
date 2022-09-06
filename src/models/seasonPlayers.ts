import { BelongsTo, Column, DataType, ForeignKey, Index, Model, Table } from 'sequelize-typescript'
import { players } from './players'

export interface seasonPlayersAttributes {
  playerId: number
  points?: number
  starts?: number
  subs?: number
  goals?: number
  ownGoals?: number
  assists?: number
  concedes?: number
  cleansheets?: number
  redCards?: number
  yellowCards?: number
  penSaves?: number
  penMisses?: number
  savesTier1?: number
  savesTier2?: number
  passesTier1?: number
  passesTier2?: number
  tacklesTier1?: number
  tacklesTier2?: number
  shotsTier1?: number
  shotsTier2?: number
  motms?: number
  added: Date
  updated: Date
}

@Table({ tableName: 'seasonPlayers', timestamps: false })
export class seasonPlayers extends Model<seasonPlayersAttributes, seasonPlayersAttributes> implements seasonPlayersAttributes {
  @BelongsTo(() => players, 'playerId')
    player: players

  @ForeignKey(() => players)
  @Column({ primaryKey: true, type: DataType.INTEGER })
  @Index({ name: 'playerId_idx', using: 'BTREE', order: 'ASC', unique: false })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
    playerId!: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    points?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    starts?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    subs?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    goals?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    ownGoals?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    assists?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    concedes?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    cleansheets?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    redCards?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    yellowCards?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    penSaves?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    penMisses?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    savesTier1?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    savesTier2?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    passesTier1?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    passesTier2?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    tacklesTier1?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    tacklesTier2?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    shotsTier1?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    shotsTier2?: number

  @Column({ allowNull: true, type: DataType.INTEGER, defaultValue: '0' })
    motms?: number

  @Column({ type: DataType.DATE })
    added!: Date

  @Column({ type: DataType.DATE })
    updated!: Date
}
