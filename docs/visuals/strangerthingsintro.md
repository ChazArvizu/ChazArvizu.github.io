Stranger Things Intro
=====

<ClientOnly>
  <StrangerThingsIntro/>
</ClientOnly>

## Introduction
Stranger Things is one of my favorite shows of all time, which is what inspired me to make this animation. The title sequence for Stranger Things is also one of my favorites for any show I've watched. I like the science fiction/horror aspect of the series and how you're constantly on your toes, wondering what could happen next. My favorite season is season 3 which is when my favorite characters, Steve, shows most of his growth as a character.

## Technical Details
To create this animation I followed an excellent write up [found here](https://www.roboleary.net/animation/2023/05/30/how-to-make-a-slick-animation-stranger-things-title-sequence.html). In this animation I used GSAP, which is a powerful javascript animation library. (more concise writeup coming soon!)

<script setup>
import { defineAsyncComponent } from 'vue';

const StrangerThingsIntro = defineAsyncComponent(() =>
  import('../../../components/StrangerThingsIntro.vue')
);
</script>