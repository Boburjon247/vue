import axios from './axios'
const ArticleService = {
     articles() {
          return axios.get('/articles')
     },
     articleDelail(slug) {
          return axios.get(`/articles/${slug}`)
     },
     createArticle(article) {
          return axios.post('/articles', { article: article })
     },
     deleteArticle(slug) {
          return axios.delete(`/articles/${slug}`)
     }
}
export default ArticleService