<template lang="html">
     <ul class="textLeft list-group">
          <li class="list-group-item list-group-item-danger" v-for="errorMessege in errorMesseges" :key="errorMessege">
               {{ errorMessege }}
          </li>
     </ul>
</template>
<script>
export default {
     name: 'ValudationError',
     props: {
          valudationError: {
               type: Object,
               required: true,
          }
     },
     computed: {
          errorMesseges() {
               return Object.keys(this.valudationError).map(name => {
                    const msg = this.valudationError[name].join(', ')
                    return `${name} ${msg}`
               });
          }
     }
}
</script>
<style lang="css"></style>