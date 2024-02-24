import ArticleService from "../service/articile"

const state = {
     data: null,
     isLoding: false,
     error: null
}
const mutations = {
     getArticleStart(state) {
          state.isLoding = true
          state.data = null
          state.error = null
     },
     getArticleSuccess(state, payload) {
          state.isLoding = false
          state.data = payload
     },
     getArticleFailure(state) {
          state.isLoding = false
     },
}
const actions = {
     articles(context) {
          return new Promise((resolve, reject) => {
               context.commit('getArticleStart')
               ArticleService.articles()
                    .then(response => {
                         context.commit('getArticleSuccess', response.data.articles)
                         resolve(response.date.articles)
                    })
                    .catch(error => context.commit('getArticleFailure'))
          })
     }
}
export default {
     state,
     mutations,
     actions,
}