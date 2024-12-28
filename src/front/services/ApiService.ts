import http from '../plugings/axios'
import { Books } from '@/types/api/response/book'

class ApiService {
  async getUser(): Promise<any> {
    const res = await http.get('/api/user')
    return res.data
  }

  async getBook(): Promise<Books[]> {
    const res = await http.post('/api/book_list')
    return res.data
  }
}

export default new ApiService()
