import express, { Request, Response } from 'express'
import AppDataSource from '@/config/data-source'
import { User } from '@/app/domain/entities/User'
import { Book } from './app/domain/entities/Book'
import { Books } from '@/types/api/response/book'

const PORT = 5000
const app = express()
const startServer = async () => {
  const connect = await AppDataSource.initialize()
  app.use(express.json())

  app.listen(PORT, () => {
    console.log('Start------------------')
  })

  app.get('/api/hello', async (req: Request, res: Response) => {
    req.addListener

    res.json({
      message: 'HELL!!!!!!!!!!!!!!!!!',
    })
  })

  app.get('/api/user', async (_, res: Response) => {
    const UserEmail = await connect
      .getRepository(User)
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
        .getRepository(Book)
        .createQueryBuilder('books')
        .select(['title', 'description', 'price', 'status'])
        .getMany()

      const bookList: Books[] = books.map((book) => {
        return {
          title: book.title,
          description: book.description,
          price: book.price,
          status: book.status,
        }
      })

      res.json({
        bookList,
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'データ取得中にエラーが発生しました' })
    }
  })
}

startServer()
