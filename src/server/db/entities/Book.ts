import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number

  @Column('varchar', { length: 255, nullable: false })
  title: string

  @Column('text', { nullable: true })
  description: string | null

  @Column('int', { unsigned: true, nullable: false })
  price: number

  @Column('int', { unsigned: true, nullable: false })
  status: number

  @CreateDateColumn({
    type: 'timestamp',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date

  @UpdateDateColumn({
    type: 'timestamp',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP(0)',
  })
  updated_at: Date
}
