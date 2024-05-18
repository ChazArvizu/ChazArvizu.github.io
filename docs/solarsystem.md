Solar System
=====

<ClientOnly>
  <SolarSystem/>
</ClientOnly>

To create an interactive solar system simulation on my VuePress 2 website, I followed an excellent tutorial, which can be [found here](https://www.youtube.com/watch?v=pgFnZyL8zEA&t=0). While the tutorial provided the necessary JavaScript for the simulation, there were additional steps I had to take to integrate it. Implementing this component required several configurations to ensure it runs smoothly on VuePress 2. Here are the additional problems that needed solving:

**Browser-Specific APIs**:
p5.js relies on browser-specific APIs such as window and document. These APIs are unavailable during SSR in a Node.js environment, causing errors if accessed during the build process.

**Client-Side Only Execution**:
By loading the component asynchronously, we ensure it is only executed in the client-side environment where the necessary browser APIs are available. This prevents any SSR-related issues.

<script setup>
import { defineAsyncComponent } from 'vue';

const SolarSystem = defineAsyncComponent(() =>
  import('../../components/SolarSystem.vue')
);
</script>
