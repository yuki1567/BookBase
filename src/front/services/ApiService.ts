import http from '../plugings/axios'

class ApiService {
  async getUser(): Promise<any> {
    const res = await http.get('/api/user')
    return res.data
  }
}

export default new ApiService()
