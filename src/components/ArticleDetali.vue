<template lang="html">
     <div v-if="article">
          {{ article.title }}
     </div>
     
</template>
<script>
import { mapState } from 'vuex'
export default {
     computed: {
          ...mapState({
               article: state => state.articles.articleDetail,
          })
     },
     props: {
          articleDelail: {
               type: Object,
               required: true
          }
     }
}
</script>
<style lang="css"></style>