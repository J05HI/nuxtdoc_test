<template>
  <div class="home-teaser" :style="homeTeaserStyles" v-editable="blok">
    <div class="home-teaser__inner">
      <h1 class="home-teaser__title">{{blok.title}}</h1>
      <h2 class="home-teaser__subtitle">{{blok.subtitle}}</h2>
      <link-button :to="'/' + blok.button_link.cached_url" :text="blok.button_text" class="home-teaser__button"/>
      <link-button to="https://github.com/storyblok/nuxtdoc" text="Github" theme="dark" class="home-teaser__button"/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    homeTeaserStyles: function() {
      return { backgroundImage: `url('${this.blok.background_image || 'https://a.storyblok.com/f/43760/2500x900/8c300ba091/background.svg'}')` }
    }
  },
  props: ['blok']
}
</script>

<style>
.home-teaser {
  background-size: cover;
  background-position: center;
  height: 500px;
  text-align: center;
  padding-top: 80px;
  background-repeat: no-repeat;
  transition: all 0.3s ease;
}

.home-teaser:hover {
  transform: scale(1.05);
}

.home-teaser__inner {
  max-width: 1200px;
  padding: 30px 30px;
  margin: 0 auto;
}

.home-teaser__title {
  padding-top: 30px;
  color: #fff;
  margin: 0;
  font-weight: 400;
  font-size: 4em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.home-teaser__subtitle {
  color: #fff;
  font-weight: 400;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.home-teaser__button {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>