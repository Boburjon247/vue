import { removeItem, setItem } from '../helpers/persistaneStorage';
import AuthServics from "@/service/auth";
const state = {
     isLoading: false,
     user: null,
     errors: null,
     isLoggedIn: null,
}
// const getters = {
//      currentUser: state => {
//           return state.user
//      }
// }
const mutations = {
     registerStart(state, payload) {
          state.isLoading = true;
          state.user = null;
          state.errors = null
          state.isLoggedIn = null
     },
     registerSuccess(state, payload) {
          state.isLoading = false
          state.user = payload
          state.isLoggedIn = true
     },
     registerFailure(state, payload) {
          state.isLoading = false;
          state.errors = payload.errors;
          state.isLoggedIn = false

     },

     loginStart(state, payload) {
          state.isLoading = true;
          state.user = null;
          state.errors = null
          state.isLoggedIn = null
     },
     loginSuccess(state, payload) {
          state.isLoading = false
          state.user = payload
          state.isLoggedIn = true
     },
     loginFailure(state, payload) {
          state.isLoading = false;
          state.errors = payload.errors;
          state.isLoggedIn = false
     },
     currentUserStart(state) {
          state.isLoading = true
     },
     currentUserSuccess(state, payload) {
          state.isLoading = false
          state.user = payload
          state.isLoggedIn = true

     },
     currentUserFailure() {
          state.isLoading = false;
          state.user = null;
          state.isLoggedIn = false
     },
     logout(state) {
          state.user = null
          state.isLoggedIn = false
     }
}
const actions = {
     register(context, user) {
          return new Promise((resolve, reject) => {
               context.commit('registerStart');
               AuthServics.register(user)
                    .then(response => {
                         context.commit('registerSuccess', response.data.user);
                         setItem('token', response.data.user.token)
                         resolve(response.data.user)
                    })
                    .catch(error => {
                         context.commit('registerFailure', error.response.data);
                         reject(error.response.data)
                    })
          })
     },
     login(context, user) {
          return new Promise((resolve, reject) => {
               context.commit('loginStart')
               AuthServics.login(user)
                    .then(response => {
                         context.commit('loginSuccess', response.data.user);
                         setItem('token', response.data.user.token)
                         resolve(response.data.user)
                    })
                    .catch(error => {
                         context.commit('loginFailure', error.response.data);
                         reject(error.response.data)
                    })
          })
     },
     getCurrentGetUser(context) {
          return new Promise((resolve) => {
               context.commit('currentUserStart')
               AuthServics.currentUser().then(
                    response => {
                         context.commit('currentUserSuccess', response.data.user);
                         resolve(response.data.user)
                    }
               ).catch(
                    () => { context.commit('currentUserFailure') }
               )
          })
     },
     logout(context) {
          context.commit('logout')
          removeItem('token')
     }


}
export default {
     state,
     mutations,
     actions,
     // getters,
}