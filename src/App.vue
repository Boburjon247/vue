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
  }
}
</script>
<style lang="css"></style>