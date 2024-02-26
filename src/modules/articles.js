import ArticleService from "../service/articile"

const state = {
     data: null,
     isLoding: false,
     error: null,
     articleDetail: null,
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
          state.articleDetail = null
          state.error = null
          state.data = null
          state.articleDetail = null
     },
     getArticleDetailSuccess(state, payload) {
          state.isLoding = false
          state.articleDetail = payload
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
          return new Promise(resolve => {
               context.commit('getArticleDetailStart')
               ArticleService.articleDelail(slug)
                    .then(response => {
                         context.commit('getArticleDetailSuccess', response.data.article)
                         resolve(response.data.article)
                    })
                    .catch(() => context.commit('getArticleFailure'))
          })
     }
}
export default {
     state,
     mutations,
     actions,
}