import axios from './axios'
const ArticleService = {
     articles() {
          return axios.get('/articles')
     },
     articleDelail(slug) {
          return axios.get(`/article/${slug}`)
     }
}
export default ArticleService