import axios from './axios'

const AuthServics = {
     register(user) {
          return axios.post('/users', { user: user })
     },
     login(user) {
          return axios.post('/users/login',{user})
     }
}

export default AuthServics
