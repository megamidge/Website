<template>
  <q-page class="column no-wrap items-stretch justify-start">
    <welcome id="welcome" />
    <home-portfolio id="portfolio" />
    <home-c-v id="cv" />
    <home-about id="about" />
    <home-contact id="contact" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Welcome from "components/Welcome";
import HomePortfolio from "src/components/Home-Portfolio.vue";
import HomeCV from "src/components/Home-CV.vue";
import HomeAbout from "src/components/Home-About.vue";
import HomeContact from "src/components/Home-Contact.vue";

export default defineComponent({
  name: "Home",
  components: { Welcome, HomePortfolio, HomeCV, HomeAbout, HomeContact },
});
</script>
