<template>
     <div class="container">
          <main class="form-signin m-auto w-25">
               <form>
                    <h1 class="h3 mb-3 fw-normal">Register</h1>
                    <ValudationErr v-if="valudationError" :valudationError="valudationError" />
                    <Input :label="'Name'" :type="'text'" v-model="username"></Input>
                    <Input :label="'Email address'" :type="'email'" v-model="email"></Input>
                    <Input :label="'Password'" :type="'password'" v-model="password"></Input>
                    <Button type="submit" :disabled="isLoding" @click="regClick"> Register </Button>
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
               username: '',
               email: '',
               password: '',
          }
     },
     computed: {
          ...mapState({
               isLoding: state => state.auth.isLoding,
               valudationError: state => state.auth.errors,
          }),
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
                    .dispatch('register', data)
                    .then(user => {
                         this.$router.push({ name: 'home' })
                    })
                    .catch(err => console.log('Error', err))
          }
     }
}
</script>
<style></style>