<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="q-py-xl q-px-xl">
        <q-toolbar-title>
          <p class="q-ma-none text-h3 text-bold">Sam Smith</p>
          <p class="q-ma-none text-grey-5">Software Developer</p>
        </q-toolbar-title>
        <q-tabs
          class="bg-white rounded q-pa-xs text-black"
          active-class="active"
          align="justify"
        >
          <q-route-tab name="home" label="Home" to="/#welcome" />
          <q-route-tab name="portfolio" label="Portfolio" to="/#portfolio" />
          <q-route-tab name="cv" label="Curriculum Vitae" to="/#cv" />
          <q-route-tab name="about" label="About" to="/#about" />
          <q-route-tab name="contact" label="Contact" to="/#contact" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    // const leftDrawerOpen = ref(false);

    return {};
  },
});
</script>

<style lang="scss">
.rounded {
  border-radius: 28px;
  .q-tab {
    border-radius: inherit;

    &.active {
      background-color: $primary;
      color: white;
      .q-tab__content {
        z-index: 1;
      }
    }
    .q-tab__indicator {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      border-radius: inherit;
      background-color: $primary;
      // z-index: -1;
    }
  }
}
</style>
