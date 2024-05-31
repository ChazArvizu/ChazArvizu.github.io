Stranger Things Intro
=====

<ClientOnly>
  <StrangerThingsIntro/>
</ClientOnly>

<script setup>
import { defineAsyncComponent } from 'vue';

const StrangerThingsIntro = defineAsyncComponent(() =>
  import('../../components/StrangerThingsIntro.vue')
);
</script>