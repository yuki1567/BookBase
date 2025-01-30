import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('books')
export class BookORM {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  readonly id!: number

  @Column('varchar', { length: 255, nullable: false })
  title!: string

  @Column('text', { nullable: true })
  description!: string | null

  @Column('varchar', { length: '255', nullable: true })
  author!: string | null

  @Column('text', { nullable: true })
  author_biography!: string | null

  @Column('varchar', { length: '255', nullable: false })
  publisher!: string

  @Column('date', { nullable: false })
  release_date!: Date | null

  @Column('varchar', { length: '255', nullable: true })
  language!: string

  @Column('int', { unsigned: true, nullable: false })
  page_count!: number

  @Column('char', { length: '13', unique: true, nullable: true })
  isbn_13!: string | null

  @Column('float', { unsigned: true, nullable: true })
  width!: number

  @Column('float', { unsigned: true, nullable: false })
  height!: number

  @Column('int', { unsigned: true, nullable: false })
  price!: number

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
