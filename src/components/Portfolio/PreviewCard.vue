<template>
  <q-card style="height: 100%" class="column">
    <q-img :src="img" :ratio="16 / 10" />
    <q-card-section class="text-subtitle2 q-pb-xs">
      {{ title }}
    </q-card-section>
    <q-card-section class="col q-py-xs">
      {{ desc }}
    </q-card-section>
    <q-card-actions>
      <q-btn label="View Details" :to="link" class="full-width" />
    </q-card-actions>
  </q-card>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PreviewCard',
  props: {
    img: String,
    title: String,
    desc: String,
    link: String,
  },
})
</script>
