import ArticleService from "@/service/articile"

const state = {
     isLoding: false
}
const mutations = {
     createArticleStart() {
          state.isLoding = true
     },
     createArticleSuccess() {
          state.isLoding = false

     },
     createArticleFailer() {
          state.isLoding = false

     },
}
const actions = {
     createArticle(context, article) {
          return new Promise((resolve, reject) => {
               context.commit('createArticleStart')
               ArticleService.createArticle(article)
                    .then(() => context.commit('createArticleSuccess'))
                    .catch(() => context.commit('createArticleFailer'))
          })
     },
     deleteArticle(context, slug) {
          return new Promise((resolve, reject) => {
               context.commit('createArticleStart')
               ArticleService.deleteArticle(slug)
                    .then(() => {
                         context.commit('createArticleSuccess')
                         resolve()
                    })
                    .catch(() => context.commit('createArticleFailer'))
          })
     },

}
export default {
     state,
     mutations,
     actions,
}