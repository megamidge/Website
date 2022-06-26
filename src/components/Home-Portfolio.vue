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
          <preview-card v-bind="card" class="column" style="height: 100%" />
        </div>
      </div>
      <div class="q-pa-sm col-3 row">
        <div class="full-width column items-center justify-center">
          <q-btn
            round
            icon="mdi-arrow-right"
            size="lg"
            color="accent"
            :to="{ name: 'Portfolio' }"
          />
          <p class="q-mb-none text-subtitle1 text-white q-mt-sm">View All</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import { storeToRefs } from 'pinia'
import { ref, defineComponent } from 'vue'
import { usePortfolioStore } from 'stores/portfolio'
import PreviewCard from './Portfolio/PreviewCard.vue'
export default defineComponent({
  name: 'HomePortfolio',
  components: {
    PreviewCard,
  },
  setup() {
    const cards = storeToRefs(usePortfolioStore()).cards
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
