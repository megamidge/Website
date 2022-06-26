<template>
  <div>Title is {{ title }}</div>
  <vue-markdown :source="markdown" :options="{ typographer: true }" />
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import VueMarkdown from 'vue-markdown-render'
import markdownContent from '!raw-loader!./markdown.md'

export default defineComponent({
  name: 'PortfolioItem',
  components: { VueMarkdown },
  setup() {
    const title = useRoute().params.portfolioItemTitle
    const markdown = ref(markdownContent)
    return {
      title,
      markdown,
    }
  },
})
</script>
