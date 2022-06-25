<template>
  <div v-if="loading" class="self-center text-center q-py-xl">
    <q-spinner size="128px" color="primary" />
    <p class="text-h6">Loading</p>
  </div>
  <vue-pdf-embed
    v-bind="$attrs"
    ref="pdfRef"
    @rendered="loading = false"
    @loaded="handleLoaded"
    @rendering-failed="reloadPdf"
    @loading-failed="reloadPdf"
  />
</template>
<script>
import VuePdfEmbed from 'vue-pdf-embed'
import { ref, computed } from 'vue'
export default {
  name: 'PdfEmbed',
  inheritAttrs: false,
  components: { VuePdfEmbed },
  setup() {
    const pdfRef = ref()
    const loading = ref(true)
    const reloadPdf = () => {
      // Load the PDF. When it's loaded, it'll be rendered
      pdfRef.value?.load()
    }
    const handleLoaded = () => {
      // Whe the PDF has loaded, tell it to render
      pdfRef.value?.render()
    }
    // Use a timeout to make sure the PDF loads.
    window.setTimeout(() => {
      if (loading.value) {
        reloadPdf()
      }
    }, 1000)
    return {
      pdfRef,
      loading,
      reloadPdf,
      handleLoaded,
    }
  },
}
</script>
