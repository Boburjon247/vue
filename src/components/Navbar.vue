<template lang="html">
     <div>
          <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
               <a @click="onClickHend" class="d-flex align-items-center text-dark text-decoration-none logo">
                    BMC
               </a>
               <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <template v-if="isLoggedIn">
                         <RouterLink :to="{ name: 'create-article' }" class="me-3 py-2 text-dark text-decoration-none">
                              Creat article
                         </RouterLink>
                         <RouterLink :to="{ name: 'home' }" class="me-3 py-2 text-dark text-decoration-none">
                              {{ user.username }}
                         </RouterLink>
                         <a @click="logout" href="me-3 py-2 text-dark text-decoration-none">Logout</a>
                    </template>
                    <template v-if="!isLoggedIn">
                         <RouterLink :to="{ name: 'login' }" class="me-3 py-2 text-dark text-decoration-none">Login
                         </RouterLink>
                         <RouterLink :to="{ name: 'register' }" class="me-3 py-2 text-dark text-decoration-none">Registor
                         </RouterLink>
                    </template>
               </nav>
          </div>
     </div>
</template>
<script>
import { mapState } from 'vuex'
import { RouterLink } from 'vue-router';

export default {
     methods: {
          onClickHend() {
               return this.$router.push({ name: 'home' });
          },
          logout() {
               return this.$store.dispatch('logout');
          }
     },
     components: { RouterLink },
     computed: {
          ...mapState({
               user: state => state.auth.user,
               isLoggedIn: state => state.auth.isLoggedIn
          }),
     }
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