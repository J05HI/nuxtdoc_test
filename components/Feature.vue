<template>
  <div class="feature" v-editable="blok">
    <img class="feature__image" :src="blok.logo" :alt="blok.name">
    <h2 class="feature__name">{{ blok.name }}</h2>
    <p class="feature__description">{{blok.description}}</p>
    <link-button :to="'/' + blok.link.cached_url" :text="blok.link_text"/>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style>
.feature {
  flex: 1;
  position: relative;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}

.feature__name {
  font-weight: 500;
  margin-top: 0px;
  padding-left: 50px;
  color: #333;
}

.feature__description {
  font-weight: 300;
  color: #666;
}

.feature__image {
  height: 50px;
  position: absolute;
  left: 20px;
}
</style>