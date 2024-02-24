import axios from './axios'

const AuthServics = {
     register(user) {
          return axios.post('/users', { user: user })
     },
     login(user) {
          return axios.post('/users/login', { user })
     },
     currentUser() {
          return axios.get('/user')
     },
}

export default AuthServics
