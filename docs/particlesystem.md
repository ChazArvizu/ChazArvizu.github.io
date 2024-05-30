Particle System Simulation
=====

<ClientOnly>
  <ParticleSystem/>
</ClientOnly>

<script setup>
import { defineAsyncComponent } from 'vue';

const ParticleSystem = defineAsyncComponent(() =>
  import('../../components/ParticleSystem.vue')
);
</script>