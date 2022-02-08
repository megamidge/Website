<template>
  <a
    name="portfolio"
    class="bg-blue-3 q-pt-xl q-px-xl q-pb-md column no-wrap items-start fancy-bg"
  >
    <div class="column full-width">
      <h1 class="q-ma-none">Portfolio</h1>
    </div>

    <div
      class="row no-wrap items-stretch justify-start self-center"
      style="height: 100%; width: 64em; max-width: 90vw"
    >
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="q-pa-sm flex col-3"
      >
        <div class="full-width">
          <q-card style="height: 100%" class="column">
            <q-img :src="card.img" :ratio="16 / 10" />
            <q-card-section class="text-subtitle2 q-pb-xs">
              {{ card.title }}
            </q-card-section>
            <q-card-section class="col q-py-xs">
              {{ card.desc }}
            </q-card-section>
            <q-card-actions>
              <q-btn label="View Details" :to="card.link" class="full-width" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="q-pa-sm col-3 row">
        <div class="full-width column items-center justify-center">
          <q-btn round icon="mdi-arrow-right" size="lg" color="accent" />
          <p class="q-mb-none text-subtitle1 text-white q-mt-sm">View All</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  // name: 'ComponentName',
  setup() {
    // TODO: Pull this from sowhere instead of being hardcoded.
    const cards = ref([
      {
        img: 'https://i.imgur.com/6Py5FqX.png',
        title: 'GLSL Shaders',
        desc: 'An exploration of various 3D visual effects through GLSL shaders.',
        link: '/link/to/article',
      },
      {
        img: 'https://i.imgur.com/XysBf4s.png',
        title: '3D Scene with Shaders',
        desc: 'Achieved with OpenGL, a 3D scene containing some objects, animation, and lighting.',
        link: '/link/to/article',
      },
      {
        img: 'https://i.imgur.com/qyP69yO.png',
        title: 'This website',
        desc: "I made this website you're viewing, here's how.",
        link: '/link/to/article',
      },
    ])

    return {
      cards,
    }
  },
})
</script>
<style lang="scss" scoped>
.fancy-bg {
  position: relative;
  z-index: 1;
  &::before {
    content: '';
    border-radius: 12px;
    position: absolute;
    top: 60%;
    bottom: 12px;
    left: 12px;
    right: 12px;
    background: $primary;
    z-index: -1;
  }
}
</style>
