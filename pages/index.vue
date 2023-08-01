<template>
  <div class="home" v-editable="story.content">
    <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
  </div>
</template>

<script>
import { checkAndInitEditMode } from '@/plugins/helper'

export default {
  data () {
    return { story: { content: {} } }
  },
  mounted () {
    checkAndInitEditMode(this)
  },
  async asyncData (context) {
    const { data } = await context.app.$storyapi.get(`cdn/stories/home`,
      { version: context.isDev ? 'draft' : 'published',
        cv: context.store.state.cache_version
      })

    return { story: data.story }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f5f5f5;
}

.component {
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  background-color: #fff;
}
</style>