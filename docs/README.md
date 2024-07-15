# Chaz's Coding Portfolio!

<ClientOnly>
  <StrangerThingsIntro/>
</ClientOnly>

## About Me
Hello, my name is Chaz Arvizu, and I recently moved to Tennessee after graduating with a degree in Computer Science from California State University Long Beach. I'm passionate about building useful web/mobile applications, exploring computer security, and mastering application development frameworks. My skills include Python, JavaScript, Expo, Vue.js, Django, and much more! In my free time, when I'm not coding, I enjoy going to the gym, hiking, bodyboarding, cooking, and gaming. I'm excited about the limitless possibilities of app development and eager to expand my knowledge further in this ever-changing field.

## Education
#### **B.S. Computer Science**: California State University Long Beach, December 2023
- **Acknowledgments**:
    - Fall 2021: President's List
    - Spring 2022: Deans' List
    - Fall 2022: Initiated into Tau Beta Pi - Engineering Honor Society

## Featured Projects
<span style="font-size: 0.9em;">(Click on the project cards for more details)</span>

<Card
  title="LiftJourn"
  description="LiftJourn is a web/native application that allows users to create workout routines, track their workouts, and view their friend's completed workouts. LiftJourn provides the user with an easy-to-use and convenient way to keep track of their workouts to see their progress over time. LiftJourn will have both a free version and a premium version available to users. The premium version will allow more functionality and statistical analysis. I have designed and developed this application all as a solo developer, learning Django, Vue.js and Expo as I develop the application."
  link="./projects/liftjourn.md"
/>

<Card
  title="Gym Rat"
  description="Gym Rat is a multi platform application that allows users to track both their meals and workouts in one convenient app. This application was developed with a team of five developers, including myself, in the time span of two semesters. We used the technologies Flutter and Firebase which helped to tremendously streamline our development process in creating a multi-platform application."
  link="./projects/gymrat.md"
/>

## Live Browser Animations
<span style="font-size: 0.9em;">(Click on the project cards to see more details)</span>

<Card
  title="Lorenz Attractor"
  description="I took inspiration to create this little animation from a youtuber by the name of Veritasium, as seen in his video about chaos theory. This video sparked my curiosity about chaos theory and how small changes to the inputs of an equation can drastically change the output of a system. This sort of behavior is present in our everyday life and takes the shape of whatever decisions we make, whether they are big or small. Our decisions are what define us, and chaotic equations offer a special way of mapping such behavior."
  link="./visuals/lorenz.md"
/>

<Card
  title="Solar System Simulation"
  description="I have always been fascinated with outer space and its limitless wonders. To capture some of this fascination, I decided to create an interactive solar system simulation. I followed an excellent tutorial on youtube. The tutorial provided the necessary JavaScript for the simulation, but additional steps were required to integrate it into VuePress 2."
  link="./visuals/solarsystem.md"
/>

<Card
  title="Stranger Things Intro"
  description="Stranger Things is one of my favorite shows of all time, which is what inspired me to make this animation. The title sequence for Stranger Things is also one of my favorites for any show I've watched. I like the science fiction/horror aspect of the series and how you're constantly on your toes, wondering what could happen next. My favorite season is season 3 which is when my favorite characters, Steve, shows most of his growth as a character."
  link="./visuals/strangerthingsintro.md"
/>

<Footer />

<script setup>
import { defineAsyncComponent } from 'vue';

const StrangerThingsIntro = defineAsyncComponent(() =>
  import('../../components/StrangerThingsIntro.vue')
);
</script>

<script>
import Card from '../../components/Card.vue'
import Footer from '../../components/Footer.vue'

export default {
  components: {
    Card,
    Footer,
  },
}
</script>
