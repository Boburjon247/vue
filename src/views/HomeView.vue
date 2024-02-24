<template lang="html">
     <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
               <div v-if="isLoding">
                    <div class="spinner-border" role="status">
                         <span class="visually-hidden">Loading...</span>
                    </div>
               </div>
               <ArticleCard v-else v-for="article in data" :article="article" :key="article.id" />
          </div>
     </div>
</template>
<script>
import { mapState } from 'vuex'
import ArticleCard from '@/components/ArticleCard.vue';
export default {
     components: {
          ArticleCard,
     },
     computed: {
          ...mapState({
               data: state => state.articles.data,
               isLoding: state => state.articles.isLoding,
               error: state => state.articles.error,
          })
     },
     mounted() {
          this.$store.dispatch('articles')
     }
}
</script>
<style lang="">
     
</style>