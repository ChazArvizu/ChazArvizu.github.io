<template>
    <div id="solar-system-container"></div>
</template>

<script>
import p5 from 'p5';

export default {
    name: 'SolarSystem',
    data() {
        return {
            sketch: null,
        };
    },
    methods: {
        createSketch(p) {
            let planets = [];
            let sun;
            const numPlanets = 4;
            const G = 60;
            const destabilise = 0.15;
            let canvas; // Reference to the canvas element

            p.setup = () => {
                canvas = p.createCanvas(400, 400); // Create a 400x400 canvas
                canvas.parent('solar-system-container'); // Set the parent of the canvas
                sun = new Body(16, p.createVector(0, 0), p.createVector(0, 0));

                // Initialize the planets
                for (let i = 0; i < numPlanets; i++) {
                    const mass = p.random(4, 7);
                    const radius = p.random(sun.d, Math.min(p.windowWidth / 4, p.windowHeight / 4)); // Adjust to fit within frame
                    const angle = p.random(0, p.TWO_PI);
                    const planetPos = p.createVector(radius * p.cos(angle), radius * p.sin(angle));

                    // Find direction of orbit and set velocity
                    let planetVel = planetPos.copy();
                    if (p.random(1) < 0.1) planetVel.rotate(-p.HALF_PI);
                    else planetVel.rotate(p.HALF_PI); // Direction of orbit
                    planetVel.normalize();
                    planetVel.mult(p.sqrt((G * sun.mass) / radius)); // Circular orbit velocity
                    planetVel.mult(p.random(1 - destabilise, 1 + destabilise)); // create elliptical orbit

                    planets.push(new Body(mass, planetPos, planetVel));
                }
            };

            p.draw = () => {
                p.background(180);
                p.translate(p.width / 2, p.height / 2);
                for (let i = numPlanets - 1; i >= 0; i--) {
                    sun.attract(planets[i]);
                    planets[i].move();
                    planets[i].show();
                }
                sun.show();
            };

            class Body {
                constructor(_mass, _pos, _vel) {
                    this.mass = _mass;
                    this.pos = _pos;
                    this.vel = _vel;
                    this.d = this.mass * 2;
                    this.thetaInit = 0;
                    this.path = [];
                    this.pathLen = Infinity;
                }

                show() {
                    p.stroke(0, 50);
                    for (let i = 0; i < this.path.length - 2; i++) {
                        p.line(this.path[i].x, this.path[i].y, this.path[i + 1].x, this.path[i + 1].y);
                    }
                    p.fill(255);
                    p.noStroke();
                    p.ellipse(this.pos.x, this.pos.y, this.d, this.d);
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

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };
        },
    },
    mounted() {
        this.sketch = new p5(this.createSketch);
    },
    beforeUnmount() {
        if (this.sketch) {
            this.sketch.remove();
        }
    },
};
</script>

<style scoped>
#solar-system-container {
    width: 100%;
}
</style>
