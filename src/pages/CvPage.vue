<template>
  <q-page>
    <div class="column items-stretch" style="position: relative">
      <div
        v-if="$q.platform.is.mobile"
        class="q-mb-sm button bg-white row justify-center mobile"
      >
        <q-btn
          label="Download"
          icon="mdi-download"
          tag="a"
          target="_blank"
          to="/Sam-Smith-CV.pdf"
          color="white"
          text-color="primary"
          download
          flat
        />
      </div>

      <q-btn
        v-else
        label="Download"
        icon="mdi-download"
        tag="a"
        target="_blank"
        to="/Sam-Smith-CV.pdf"
        color="white"
        text-color="primary"
        download
        flat
        class="self-end q-mt-md q-mb-sm button"
      />

      <div ref="pdfWrapper">
        <pdf-embed source="/Sam-Smith-CV.pdf" :width="pdfWidth" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, computed } from 'vue'
import PdfEmbed from 'components/PdfEmbed.vue'
export default {
  name: 'CvPage',
  components: { PdfEmbed },
  setup() {
    const pdfWrapper = ref()

    const pdfWidth = computed(() => {
      return pdfWrapper.value?.clientWidth
    })

    return {
      pdfWidth,
      pdfWrapper,
    }
  },
}
</script>
<style lang="scss">
.button {
  position: sticky;
  top: 200px;
  z-index: 2;
  &.mobile {
    top: 178px;
  }
}
</style>
