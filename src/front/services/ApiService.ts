import http from '../plugings/axios'

class ApiService {
  getUser(): Promise<any> {
    return http.get('/api/user')
  }
}

export default new ApiService()
