<template>
  <a
    name="cv"
    class="bg-blue-4 q-pt-xl q-px-xl column no-wrap items-start"
    style="height: 35vh; overflow: hidden"
    ref="wrapperRef"
  >
    <div class="column full-width">
      <h1 class="q-ma-none">CV</h1>
    </div>
    <div class="row full-width justify-between q-px-xl" style="">
      <div class="column items-center justify-start" style="padding-top: 100px">
        <p class="text-body1">
          Download my CV or click the preview to view online.
        </p>
        <q-btn
          label="Download"
          icon="mdi-download"
          tag="a"
          target="_blank"
          to="/Sam-Smith-CV.pdf"
          color="white"
          text-color="primary"
          download
        />
      </div>
      <router-link
        class="cv-pdf"
        :to="{ name: 'CV' }"
        style="min-height: 100px; min-width: 100px"
      >
        <div class="hover-content">
          <q-btn
            label="View Online"
            icon-right="mdi-arrow-right"
            style="text-decoration: none"
            class="button text-nowrap shadow-3"
            color="primary"
          />
        </div>
        <vue-pdf-embed
          source="/Sam-Smith-CV.pdf"
          :page="1"
          :width="pdfWidth"
          class="shadow-6"
          style="user-select: none; cursor: pointer"
        />
      </router-link>
    </div>
  </a>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
export default {
  name: 'HomeCV',
  components: { VuePdfEmbed },
  setup() {
    const $q = useQuasar()
    const wrapperRef = ref()
    const maxWidth = 300
    const pdfWidth = computed(() => {
      console.log('$q', $q)
      switch ($q.screen.name) {
        case 'xl':
        case 'lg':
        case 'md':
        case 'sm':
        case 'xs':
        default:
          return Math.min(wrapperRef.value?.clientWidth / 3, maxWidth)
      }
    })
    return {
      pdfWidth,
      wrapperRef,
    }
  },
}
</script>

<style lang="scss" scoped>
.cv-pdf {
  transition: transform 0.4s;
  position: relative;
  &:link,
  &:visited {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    transform: translateY(-10px);
  }
  &:hover .hover-content {
    opacity: 1;
  }
  .hover-content {
    transition: opacity 0.4s;
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #99999955;
    z-index: 2;

    .button {
      position: absolute;
      top: 100px;
      left: 50%;
      transform: translate(-50%, -50%);
      //z-index: 2;
    }
  }
}
</style>
