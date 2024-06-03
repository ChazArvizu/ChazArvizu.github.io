Solar System Simulation
=====

<ClientOnly>
  <SolarSystem/>
</ClientOnly>

Explore the wonders of our solar system with this interactive simulation.

## Introduction
I have always been fascinated with outer space and its limitless possibilities it provides for our future. To capture some of this fascination, I decided to create an interactive solar system simulation. I followed an excellent tutorial, which can be [found here](https://www.youtube.com/watch?v=pgFnZyL8zEA&t=0). The tutorial provided the necessary JavaScript for the simulation, but additional steps were required to make additional customizations integrate it into VuePress 2.

## Technical Details
Implementing this component required several configurations to ensure it runs smoothly on VuePress 2. Here are the additional problems that needed solving:

- **Browser-Specific APIs**: p5.js relies on browser-specific APIs such as `window` and `document`. These APIs are unavailable during Server-Side Rendering (SSR) in a Node.js environment, causing errors if accessed during the build process. To solve this issue the component had to be loaded asynchronously, we ensure it is only executed in the client-side environment via the `<ClientOnly>` tags where the necessary browser APIs are available. This prevents any SSR-related issues. Here's the code thats needed to get this type of behavior: 
```vue
<ClientOnly>
  <SolarSystem/>
</ClientOnly>


<script setup>
import { defineAsyncComponent } from 'vue';

const SolarSystem = defineAsyncComponent(() =>
  import('../../components/SolarSystem.vue')
);
</script>
```

## Additional Customizations
To enhance this simulation, I made several customizations:
- Adjusting the initial positions and velocities of the planets for a more dynamic simulation.
- Ensuring the colors of the planets are bright neon colors for better visual appeal.
- Expanding the radius of planetary orbits for a more spacious simulation.

<script setup>
import { defineAsyncComponent } from 'vue';

const SolarSystem = defineAsyncComponent(() =>
  import('../../../components/SolarSystem.vue')
);
</script>
