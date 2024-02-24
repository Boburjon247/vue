import ArticleService from "../service/articile"

const state = {
     data: null,
     isLoding: false,
     error: null,
     articleData: null,
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


     getArticleDetailStart(state) {
          state.isLoding = true
          state.articleData = null
          state.error = null
     },
     getArticleDetailSuccess(state, payload) {
          state.isLoding = false
          state.articleData = payload
     },
     getArticleDetailFailure(state) {
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
     },
     articleDetail(context, slug) {
          return new Promise((resolve, reject) => {
               context.commit('getArticleDetailStart')
               ArticleService.articleDelail(slug)
                    .than(response => {})
                    .catch()
          })
     }
}
export default {
     state,
     mutations,
     actions,
}