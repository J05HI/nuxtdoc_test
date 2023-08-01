<template>
  <div class="grid grid--3" v-editable="blok">
    <component :key="blok._uid" v-for="blok in blok.columns" :blok="blok" :is="blok.component"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang='scss'> 
.grid {
  max-width: 1200px;
  padding: 30px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.grid--3 {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 780px) {
  .grid {
    display: block;
  }
}

@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

</style>