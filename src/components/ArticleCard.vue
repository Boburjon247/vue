<template lang="html">
     <div class="col">
          <div class="card shadow-sm">
               <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                    role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                         dy=".3em">Thumbnail</text>
               </svg>

               <div class="card-body">
                    <p class="card-text">{{ article.title }}</p>
                    <div class="d-flex justify-content-between align-items-center">
                         <div class="btn-group">
                              <button @click="navigation" type="button" class="btn btn-sm btn-outline-secondary">Read
                                   article</button>
                              <button :disabled="isLoding" v-if="article.author.username == user.username"
                                   @click="deleteArticle" type="button" class="btn btn-sm btn-outline-danger">Delete</button>

                         </div>
                         <small class="text-muted">{{ new Date(article.createdAt).toLocaleDateString('us') }}</small>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
     props: {
          article: {
               type: Object,
               required: true
          }
     },
     computed: {
          ...mapState({
               user: state => state.auth.user,
               isLoding: state => state.articleHendel.isLoding
          })
     },
     methods: {
          navigation() {
               return this.$router.push(`/article/${this.article.slug}`)
          },
          deleteArticle() {
               return this.$store.dispatch('deleteArticle', this.article.slug)
               .then(()=>this.$store.dispatch('articles'))
          }
     },
}
</script>