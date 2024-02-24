<template lang="html">
  <div class="container">
    <Navbar />
  </div>
  <RouterView />
</template>
<script>
import { Navbar } from '@/components'
import { RouterView } from 'vue-router'
export default {
  components: {
    Navbar,
  },
  mounted() {
    this.$store.dispatch('getCurrentGetUser')
    this.$store.dispatch('articles')
  }
}
</script>
<style lang="css"></style>