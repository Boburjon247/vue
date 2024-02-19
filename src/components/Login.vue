<template>
     <div class="container">
          <main class="form-signin m-auto w-25">
               <form>
                    <h1 class="h3 mb-3 fw-normal">Login</h1>
                    <ValudationErr v-if="valudationError" :valudationError="valudationError" />
                    <Input v-model="email" :label="'Email address'" :type="'email'"></Input>
                    <Input v-model="password" :label="'Password'" :type="'password'"></Input>
                    <Button type="submit" :disabled="isLoading" @click="regClick"> Login </Button>
               </form>
          </main>
     </div>
</template>
<script>
import { mapState } from 'vuex'
import ValudationErr from "./ValudationErr.vue";
export default {
     components: {
          ValudationErr
     },
     data() {
          return {
               email: '',
               password: '',
          }
     },
     computed: {
          ...mapState({
               isLoading: state => state.auth.isLoading,
               valudationError: state => state.auth.errors,
          }),
          // isLoading() {
          //      return this.$store.state.auth.isLoading;
          // },
          // valudationError() {
          //      return this.$store.state.auth.errors
          // },
     },
     methods: {
          regClick(e) {
               e.preventDefault();
               const data = {
                    username: this.username,
                    email: this.email,
                    password: this.password
               }
               this.$store
                    .dispatch('login', data)
                    .then(user => {
                         this.$router.push({ name: 'home' })
                    })
                    .catch(err => console.log('Error', err))
          }
     }

}
</script>
<style></style>