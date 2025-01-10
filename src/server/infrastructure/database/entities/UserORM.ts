import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('users')
export class UserORM {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  readonly id!: number

  @Column('varchar', { length: 255, unique: true, nullable: false })
  email!: string

  @Column('varchar', { length: 60, nullable: false })
  password!: string

  @Column('int', { unsigned: true, nullable: false })
  status!: number

  @CreateDateColumn({
    type: 'timestamp',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
  })
  readonly created_at!: Date

  @UpdateDateColumn({
    type: 'timestamp',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP(0)',
  })
  readonly updated_at!: Date
}
