import axios from './axios'

const AuthServics = {
     register(user) {
          return axios.post('/users', { user: user })
     }
}

export default AuthServics
