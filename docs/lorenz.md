Lorenz Attractor
====

<LorenzAttractor></LorenzAttractor>

"The flapping of the wings of a butterfly can be felt on the other side of the world."

To create this animation in javascript I followed the steps in the video [found here](https://www.youtube.com/watch?v=AwlOq242GgI&t). I only had to make some small adjustments in the code to get the correct styling, size ratios and to get the animation to work with VuePress' template syntax. 

I took inspiration to create this little animation from a youtuber by the name of Veritasium, as seen in his video about [chaos theory](https://www.youtube.com/watch?v=fDek6cYijxI). This video sparked my curiosity about chaos theory and how small changes to the inputs of an equation can drastically change the output of a system. This sort of behavior is present in our everyday life and takes the shape of whatever decisions we make, whether they are big or small. Our decisions are what define us, and chaotic equations offer a special way of mapping such behavior. 

Again, the code below was adapted from the video [found here](https://www.youtube.com/watch?v=AwlOq242GgI&t).
```vue
<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
export default {
    name: 'LorenzAttractor',
    mounted() {
        this.DrawLorenz()
    },
    methods: {
        DrawLorenz() {
            const canvas = this.$refs.canvas;
            const ctx = canvas.getContext('2d');

            const dt = 0.01;
            const sigma = 10;
            const rho = 28;
            const beta = 8 / 3;

            function integrate({ x, y, z }) {
                x += (sigma * (y - x)) * dt;
                y += (x * (rho - z) - y) * dt;
                z += (x * y - beta * z) * dt;
                return { x, y, z };
            }

            function extendPath(path, steps) {
                [...Array(steps)].forEach(() => {
                    const lastP = path[path.length - 1];
                    const p = integrate(lastP);
                    path.push(p);
                });
                return path;
            }

            function scale(points, size, scaleFactor) {
                const mx = Math.min(...points.map(({ x, y, z }) => x));
                const Mx = Math.max(...points.map(({ x, y, z }) => x));
                const my = Math.min(...points.map(({ x, y, z }) => y));
                const My = Math.max(...points.map(({ x, y, z }) => y));
                const mz = Math.min(...points.map(({ x, y, z }) => z));
                const Mz = Math.max(...points.map(({ x, y, z }) => z));

                const s = (v, mv, Mv) => size * scaleFactor * (v - mv) / (Mv - mv);
                return points.map(({ x, y, z }) => {
                    x = s(x, mx, Mx);
                    y = s(y, my, My);
                    z = s(z, mz, Mz);
                    return { x, y, z };
                });
            }

            var q = 0;
            function draw(path) {
                q += 0.01; // Smaller increment value
                const rotationCenterX = 150; // X-coordinate of the new rotation center
                const rotationCenterY = canvas.height / 2; // Y-coordinate of the new rotation center

                const map = ({ x, y, z }) => {
                    // Apply rotation around the new center point
                    const xx = (x - rotationCenterX) * Math.cos(q) - (y - rotationCenterY) * Math.sin(q) + rotationCenterX;
                    const yy = z;

                    // Clip to canvas bounds
                    const xClipped = Math.max(0, Math.min(canvas.width, xx));
                    const yClipped = Math.max(0, Math.min(canvas.height, yy));

                    return [xClipped, yClipped];
                };

                // Set the strokeStyle to blue
                ctx.strokeStyle = 'blue';

                ctx.lineWidth = 1;

                ctx.beginPath();
                path.map(map).forEach(p => ctx.lineTo(p[0], p[1]));
                ctx.stroke();
            }

            const path = [{ x: 1, y: 1, z: 1 }];
            function step() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                extendPath(path, 10);
                const scaled = scale(path, 600, 0.2);
                draw(scaled);
                while (path.length > 1000) path.shift();
                setTimeout(step, 1000 / 60);
            }
            step();

        }
    }
}
</script>

<style scoped>
canvas {
    border: 1px solid #ccc;
    width: 100%;
}
</style>
```


<script setup>
import LorenzAttractor from '../../components/LorenzAttractor.vue'
</script>