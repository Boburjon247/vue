<template lang="">
     <div class='container'>
          <h1>Creat article</h1>
          <form action="" @submit.prevent >
               <Input v-model="title" :label="'text'" :type="'text'"></Input>
               <Input v-model="description" :label="'Description'" :type="'text'"></Input>
               <TextAre v-model="body" :label="'Body'" :type="'text'"></TextAre>
               <Button  type="submit" :disabled="isLoding" @click="creatArticle"> Creat article </Button>
          </form>
     </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
     data() {
          return {
               title: '',
               description: '',
               body: ''
          }
     },
     methods: {
          creatArticle() {
               const article = {
                    title: this.title,
                    body: this.body,
                    description: this.description,
                    tagList: [],
               }
               this.$store.dispatch('createArticle', article)
               this.$router.push('/')
          }
     },
     computed: {
          ...mapState({
               isLoding: state => state.articleHendel.isLoding
          })
     }
}
</script>
<style lang="">
     
</style>