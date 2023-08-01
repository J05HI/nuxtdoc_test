<template>
  <div v-editable="blok" class="page-container">
    <component 
      :key="blok._uid" 
      v-for="blok in blok.body" 
      :blok="blok" 
      :is="blok.component"
      class="page-component"
    ></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
}

.page-component {
  margin-bottom: 20px;
}
</style>