import { marked } from 'marked'

export function markdown(string, param) {
  return marked.parse(resizeImages(string, param))
}

export function resizeImages(str, param) {
  return typeof str === 'undefined' ? '' : str.replace(/a.storyblok.com/g, 'img2.storyblok.com/' + param);
}

export function checkAndInitEditMode(app) {
  // Want to know more about this? https://github.com/storyblok/storyblok-nuxt
  // app.$storybridge.on(['published', 'change'], (event) => {
  //   if (!event.slugChanged) {
  //     window.location.reload()
  //   }
  // })
  app.$storybridge(
    () => {
      const storyblokInstance = new StoryblokBridge();

      storyblokInstance.on(["input", "published", "change"], (event) => {
        if ("input" === event.action) {
          if (event.story.id === this.story.id) {
            this.story.content = event.story.content;
          }
        } else {
          app.$nuxt.$router.go({
            path: app.$nuxt.$router.currentRoute,
            force: true,
          })
        }
      });
    },
    (error) => {
      console.error(error);
    }
  );
}

