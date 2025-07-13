<template>
  <div ref="outerContainer" class="outer-container">
    <div id="solar-system-container" ref="container"></div>
    <div>
      <label for="numPlanets"><b>Number of Planets:</b></label>
      <input id="numPlanets" type="number" v-model="numPlanets" min="1" max="7">
    </div>
  </div>
</template>

<script>
import p5 from 'p5';

export default {
  name: 'SolarSystem',
  data() {
    return {
      sketch: null,
      numPlanets: 4,
      containerWidth: 0,
    };
  },
  watch: {
    numPlanets() {
      this.updateSketch();
    },
  },
  mounted() {
    this.createSketch = () => {
      return (p) => {
        let planets = [];
        let sun;
        const G = 20;
        const destabilise = 0.15;
        const canvasWidthPercentage = 1;
        let canvasWidth;

        p.setup = () => {
          p.colorMode(p.HSB, 360, 100, 100); // Set color mode to HSB
          canvasWidth = this.containerWidth * canvasWidthPercentage;
          const canvasHeight = 400;
          const canvas = p.createCanvas(canvasWidth, canvasHeight);
          canvas.parent(this.$refs.container);
          sun = new Body(16, p.createVector(0, 0), p.createVector(0, 0), p.color(55, 100, 100)); // Bright yellow for the sun

          // Initialize the planets
          for (let i = 0; i < this.numPlanets; i++) {
            const mass = p.random(4, 7);
            // Increase the minimum value for the radius
            const radius = p.random(sun.d * 2, Math.min(canvasWidth / 2, canvasHeight / 2));
            const angle = p.random(0, p.TWO_PI);
            const planetPos = p.createVector(radius * p.cos(angle), radius * p.sin(angle));
            const planetColor = generateNeonColor();

            // Find direction of orbit and set velocity
            let planetVel = planetPos.copy();
            if (p.random(1) < 0.1) planetVel.rotate(-p.HALF_PI);
            else planetVel.rotate(p.HALF_PI);
            planetVel.normalize();
            planetVel.mult(p.sqrt((G * sun.mass) / radius));
            planetVel.mult(p.random(1 - destabilise, 1 + destabilise));

            planets.push(new Body(mass, planetPos, planetVel, planetColor));
          }
        };

        p.draw = () => {
          p.background(0);
          p.translate(p.width / 2, p.height / 2);
          for (let i = this.numPlanets - 1; i >= 0; i--) {
            sun.attract(planets[i]);
            planets[i].move();
            planets[i].show();
          }
          sun.show();
        };

        class Body {
          constructor(_mass, _pos, _vel, _color) {
            this.mass = _mass;
            this.pos = _pos;
            this.vel = _vel;
            this.color = _color;
            this.d = this.mass * 2;
            this.path = [];
          }

          show() {
            p.noStroke();

            // Draw the trail
            for (let i = 0; i < this.path.length - 2; i++) {
              const trailSize = p.map(i, 0, this.path.length - 2, 1, this.d / 3); // Gradually reduce the trail size
              const alpha = p.map(i, 0, this.path.length - 2, 255, 0); // Fade out the trail
              p.fill(p.hue(this.color), p.saturation(this.color), p.brightness(this.color), alpha);
              p.ellipse(this.path[i].x, this.path[i].y, trailSize, trailSize);
            }

            // Draw the planet with glow effect
            p.fill(this.color);
            p.drawingContext.shadowBlur = 20;
            p.drawingContext.shadowColor = this.color;
            p.ellipse(this.pos.x, this.pos.y, this.d, this.d);
            p.drawingContext.shadowBlur = 0;
          }

          move() {
            this.pos.x += this.vel.x;
            this.pos.y += this.vel.y;
            this.path.push(p.createVector(this.pos.x, this.pos.y));
            if (this.path.length > 50) this.path.splice(0, 1);
          }

          applyForce(f) {
            this.vel.x += f.x / this.mass;
            this.vel.y += f.y / this.mass;
          }

          attract(child) {
            const r = p.dist(this.pos.x, this.pos.y, child.pos.x, child.pos.y);
            let f = this.pos.copy().sub(child.pos);
            f.setMag((G * this.mass * child.mass) / (r * r));
            child.applyForce(f);
          }
        }

        const generateNeonColor = () => {
          const hue = p.random(0, 360); // Full range of hues
          const saturation = 100; // Full saturation for bright colors
          const brightness = 100; // Full brightness for neon effect
          return p.color(hue, saturation, brightness);
        };

        p.windowResized = () => {
          canvasWidth = this.containerWidth * canvasWidthPercentage;
          p.resizeCanvas(canvasWidth, p.height);
        };
      };
    };
    this.updateSketch = () => {
      if (this.sketch) {
        this.sketch.remove();
        this.sketch = null;
      }
      this.sketch = new p5(this.createSketch());
    };
    this.updateContainerWidth = () => {
      this.containerWidth = this.$refs.outerContainer.offsetWidth;
      this.updateSketch();
    };
    this.updateContainerWidth();
    this.resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === this.$refs.outerContainer) {
          this.updateContainerWidth();
        }
      }
    });
    this.resizeObserver.observe(this.$refs.outerContainer);
  },
  beforeUnmount() {
    if (this.sketch) {
      this.sketch.remove();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  },
};
</script>

<style scoped>
.outer-container {
  width: 100%;
}

#solar-system-container {
  margin: 0 auto;
  text-align: center;
}
</style>
