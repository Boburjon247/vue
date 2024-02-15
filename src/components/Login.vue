<template>
     <div class="container">
          <main class="form-signin m-auto w-25">
               <form>
                    <h1 class="h3 mb-3 fw-normal">Login</h1>
                    <Input :label="'Email address'" :type="'email'"></Input>
                    <Input :label="'Password'" :type="'password'"></Input>
                    <Button type="submit"> Login </Button>
               </form>
          </main>
     </div>
</template>
<script>

export default {

}
</script>
<style></style>