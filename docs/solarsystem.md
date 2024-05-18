Solar System
=====

<ClientOnly>
  <SolarSystem/>
</ClientOnly>

To create this simulation I followed the tutorial [found here](https://www.youtube.com/watch?v=pgFnZyL8zEA&t=0).

<script setup>
import { defineAsyncComponent } from 'vue';

const SolarSystem = defineAsyncComponent(() =>
  import('../../components/SolarSystem.vue')
);
</script>
