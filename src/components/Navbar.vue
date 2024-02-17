<template lang="html">
     <div>
          <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
               <a @click="onClickHend" class="d-flex align-items-center text-dark text-decoration-none logo">
                    BMC
               </a>
               <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <RouterLink :to="{ name: 'login' }" class="me-3 py-2 text-dark text-decoration-none">Login</RouterLink>
                    <RouterLink :to="{ name: 'register' }" class="me-3 py-2 text-dark text-decoration-none">Registor
                    </RouterLink>
               </nav>
          </div>
     </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
     methods: {
          onClickHend() {
               return this.$router.push({ name: 'home' });
          }
     },
     components: { RouterLink }
}
</script>
<style>
.logo {
     cursor: pointer;
     font-weight: bold;
     font-size: 20px;
     padding: 10px;
}
</style>