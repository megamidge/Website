<template>
  <q-page class="q-pt-xl">
    <h1 class="q-mt-none">Portfolio</h1>
    <div class="q-pt-xl q-px-xl q-pb-md fancy-bg no-inset">
      <div class="row no-wrap items-stretch justify-center self-center">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="q-pa-sm col"
          style="max-width: 300px; min-width: 200px"
          @click="
            $router.push({
              name: 'PortfolioItem',
              params: { portfolioItemTitle: card.title },
            })
          "
        >
          <preview-card v-bind="card" class="full-width" />
        </div>
      </div>
    </div>
    <div class="row">
      <!-- Content area -->
      <router-view :key="$route.fullPath" />
    </div>
  </q-page>
</template>
<script>
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from 'src/stores/portfolio'
import { defineComponent, ref } from 'vue'
import PreviewCard from 'src/components/Portfolio/PreviewCard.vue'
export default defineComponent({
  name: 'PortfolioPage',
  components: { PreviewCard },
  setup() {
    const cards = storeToRefs(usePortfolioStore()).cards
    const cardTab = ref('')
    return { cards, cardTab }
  },
})
</script>
<style lang="scss">
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
