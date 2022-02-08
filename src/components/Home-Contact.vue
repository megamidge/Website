<template>
  <a
    name="contact"
    class="bg-blue-3 q-pt-xl q-px-xl column no-wrap items-start"
    style="height: 35vh"
  >
    <h1 class="q-ma-none">Contact</h1>
    <p class="q-ma-none text-h6 text-weight-regular">
      Reach out to have a chat and talk about exciting oppurtunities.
    </p>
    <q-separator class="full-width q-my-md" />
    <div class="q-gutter-y-md self-end">
      <div class="row no-wrap items-center">
        <p class="q-ma-none text-subtitle1 q-mr-md text-bold">
          Contact me by Email:
        </p>
        <q-space />
        <q-btn
          color="white"
          text-color="primary"
          label="ss.samsmith98@outlook.com"
          @click="open['email']"
          icon="mdi-email"
        />
      </div>
      <div class="row no-wrap items-center">
        <p class="q-ma-none text-subtitle1 q-mr-md text-bold">
          Find me on LinkedIn:
        </p>
        <q-space />
        <q-btn
          color="white"
          text-color="primary"
          label="LinkedIn"
          @click="open['linkedIn']"
          icon="mdi-linkedin"
        />
      </div>
      <div class="row no-wrap items-center">
        <p class="q-ma-none text-subtitle1 q-mr-md text-bold">
          Check out my Twitter:
        </p>
        <q-space />
        <q-btn
          color="white"
          text-color="primary"
          label="Twitter"
          @click="open['twitter']"
          icon="mdi-twitter"
        />
      </div>
    </div>
  </a>
</template>

<script>
import { openURL } from 'quasar'
export default {
  // name: 'ComponentName',
  setup() {
    // collection of functions to open external URL's
    const open = {
      email: () => {
        openURL('mailto:ss.samsmith98@outlook.com')
      },
      linkedIn: () => {
        openURL('https://www.linkedin.com/in/samsmithdev/')
      },
      twitter: () => {
        openURL('https://twitter.com/megamidge11_')
      },
    }
    return {
      open,
    }
  },
}
</script>
