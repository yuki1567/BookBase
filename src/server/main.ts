import express, { Response } from 'express'
import AppDataSource from '@/infrastructure/database/data-source'
import { UserORM } from '@/infrastructure/database/entities/UserORM'
import { BookORM } from './infrastructure/database/entities/BookORM'
import { Books } from '@/types/api/response/book'

const PORT = 4000
const app = express()
const startServer = async () => {
  const connect = await AppDataSource.initialize()
  app.use(express.json())

  app.listen(PORT, () => {
    console.log('Start------------------')
  })

  app.get('/api/hello', async (_, res: Response) => {
    // req.addListener

    res.json({
      message: 'HELL!!!!!!!!!!!!!!!!!',
    })
  })

  app.get('/api/user', async (_, res: Response) => {
    const UserEmail = await connect
      .getRepository(UserORM)
      .createQueryBuilder('users')
      .select('users.email')
      .getOne()

    const email = UserEmail ? UserEmail.email : ''

    res.json({
      mail: email,
    })
  })

  app.post('/api/book_list', async (_, res: Response) => {
    try {
      const books = await connect
        .getRepository(BookORM)
        .createQueryBuilder('books')
        .select(['books.id', 'books.title', 'books.description', 'books.price'])
        .getMany()

      const bookList: Books[] = books.map((book) => {
        return {
          id: book.id,
          title: book.title,
          description: book.description,
          price: book.price,
        }
      })

      res.json(bookList)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'データ取得中にエラーが発生しました' })
    }
  })
}

startServer()
