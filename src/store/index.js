import { createStore } from "vuex";
import auth from '../modules/auth'
import articles from '../modules/articles'
import articleHendel from '../modules/articleHendel'
const store = createStore({
     state: {},
     mutations: {},
     actions: {},
     modules: { auth, articles, articleHendel },
})

export default store