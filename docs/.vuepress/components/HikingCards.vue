<template>
  <div class="card-grid">
    <Card
      v-for="(card, index) in cards"
      :key="index"
      :image="card.image"
      :title="card.title"
      :description="card.description"
    />
  </div>
</template>

<script setup>
import Card from './Card.vue'

const cards = [
  { title: 'Hall Bend Trail', description: 'Description A', image: 'HallBendTrail.jpg' },
  { title: 'Project B', description: 'Description B', image: 'imageB.png' },
  { title: 'Project C', description: 'Description C', image: 'imageC.png' },
  { title: 'Project D', description: 'Description D', image: 'imageD.png' },
  // etc.
]
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
}
</style>
