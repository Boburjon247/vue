<template>
     <div v-if="isLoding">
          <div class="spinner-border" role="status">
               <span class="visually-hidden">Loading...</span>
          </div>
     </div>
     <ArticleDetail v-else />
</template>
<script>
import ArticleDetail from '@/components/ArticleDetali.vue'
import { mapState } from 'vuex';

export default {
     computed: {
          ...mapState({
               isLoding: state => state.articles.isLoding
          })
     },
     components: {
          ArticleDetail,
     },
     mounted() {
          this.$store.dispatch('articleDetail', this.$route.params.slug)
     },
}
</script>