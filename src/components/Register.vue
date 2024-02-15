<template>
     <div class="container">
          <main class="form-signin m-auto w-25">
               <form>
                    <h1 class="h3 mb-3 fw-normal">Register</h1>
                    <Input :label="'Name'" :type="'text'"></Input>
                    <Input :label="'Email address'" :type="'email'"></Input>
                    <Input :label="'Password'" :type="'password'"></Input>
                    <Button type="submit" :disabled="isLoading" @click="regClick"> Register </Button>
               </form>
          </main>
     </div>
</template>
<script>
export default {
     computed: {
          isLoading() {
               return this.$store.state.auth.isLoading;
          },
     },
     methods: {
          regClick(e) {
               e.preventDefault();
               this.$store.commit('setLoading')
          }
     }
}
</script>
<style></style>