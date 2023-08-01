<template>
  <div class="sidebar">
    <div class="sidebar__inner" v-bind:key="version.item.id" v-for="version in $store.state.sitemap">
      <nav class="sidebar__category" v-bind:key="category.item.id" v-for="category in version.children">
        <nuxt-link class="sidebar__link sidebar__link--category" :to="'/' + category.item.slug">{{category.item.name}}</nuxt-link>
        
        <ul class="sidebar__docs">
          <li v-bind:key="doc.item.id" v-for="doc in category.children">
            <nuxt-link class="sidebar__link sidebar__link--doc" :to="'/' + doc.item.slug">{{doc.item.name}}</nuxt-link>
            
            <ul class="sidebar__subdocs" v-if="doc.item.slug == $route.path.substr(1) && subnav.length > 0">
              <li v-bind:key="navitem.id" v-for="navitem in subnav">
                
                <nuxt-link class="sidebar__link" :to="navitem.id">{{navitem.text}}</nuxt-link>
                <ul v-if="navitem.children.length > 0">
                  <li v-bind:key="child.id" v-for="child in navitem.children">
                    <nuxt-link class="sidebar__link" :to="child.id">{{child.text}}</nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  height: 100%;
  overflow-y: auto;
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
}

.sidebar__inner {
  padding: 20px;
}

.sidebar__category {
  margin-bottom: 20px;
}

.sidebar__link {
  color: #333;
  text-decoration: none;
}

.sidebar__link--category {
  font-weight: bold;
  font-size: 1.2em;
}

.sidebar__link--doc {
  margin-left: 10px;
}

.sidebar__subdocs {
  margin-left: 20px;
}
</style>

<script>
import cheerio from 'cheerio'

export default {
  computed: {
    subnav() {
      const $ = cheerio.load(this.$store.state.currentContent)
      let pageNav = []
      $('h2, h3').each((i, elem) => {
        let $elem = $(elem)
        if ($elem[0].name == 'h2') {
          pageNav.push({
            id: `#${$elem.attr('id')}`,
            text: $elem.text(),
            children: []
          })
        } else {
          pageNav[pageNav.length - 1].children.push({
            id: `#${$elem.attr('id')}`,
            text: $elem.text()
          })
        }
      })
      return pageNav
    }
  }
}
</script>