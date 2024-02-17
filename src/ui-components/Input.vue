<template>
     <div class="form-floating mb-3">
          <input @input="updatedInput" :value="modelValue" :type="type" class="form-control" :id="label"
               :placeholder="label">
          <label :for="label">{{ label }}</label>
     </div>
</template>
<script>
export default {
     name: 'Input',
     props: {
          label: String,
          type: String,
          modelValue: [String, Number],
     },
     methods: {
          updatedInput(e) {
               this.$emit('update:modelValue', e.target.value)
          },
     }
}
</script>
<style></style>