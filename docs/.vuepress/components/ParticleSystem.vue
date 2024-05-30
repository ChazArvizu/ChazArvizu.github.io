<template>
    <div ref="outerContainer" class="outer-container">
        <div id="lightning-container" ref="container"></div>
        <div>
            <label for="frequency"><b>Lightning Frequency (in seconds):</b></label>
            <input id="frequency" type="number" v-model="frequency" min="0.1" step="0.1">
        </div>
    </div>
</template>

<script>
import p5 from 'p5';

export default {
    name: 'RedLightning',
    data() {
        return {
            sketch: null,
            containerWidth: 0,
            frequency: 1, // frequency in seconds
            lightningDuration: 0.6, // lightning duration in seconds, increased for longer visibility
        };
    },
    watch: {
        frequency() {
            this.updateSketch();
        },
    },
    mounted() {
        this.createSketch = () => {
            return (p) => {
                let lastLightningTime = 0;
                let lightningActive = false;
                let lightningEndTime = 0;
                let mindFlayerImg;

                p.setup = () => {
                    this.containerWidth = this.$refs.outerContainer.offsetWidth;
                    const canvasHeight = this.containerWidth * 0.75;
                    const canvas = p.createCanvas(this.containerWidth, canvasHeight);
                    canvas.parent(this.$refs.container);
                    p.frameRate(60);
                    mindFlayerImg = p.loadImage('/mind_flayer.png', () => {
                        p.image(mindFlayerImg, 0, 0, p.width, p.height); // Draw Mind Flayer background
                    });
                };

                p.draw = () => {
                    p.image(mindFlayerImg, 0, 0, p.width, p.height); // Draw Mind Flayer background
                    const currentTime = p.millis() / 1000; // current time in seconds

                    if (currentTime - lastLightningTime > this.frequency) {
                        lightningActive = true;
                        lightningEndTime = currentTime + this.lightningDuration;
                        lastLightningTime = currentTime;
                    }

                    if (lightningActive) {
                        const bolts = Math.floor(Math.random() * 2) + 2; // 2 to 3 bolts
                        for (let i = 0; i < bolts; i++) {
                            this.drawLightning(p);
                        }
                        if (currentTime > lightningEndTime) {
                            lightningActive = false;
                        }
                    }
                };

                this.drawLightning = (p) => {
                    p.stroke(255, 0, 0);
                    p.strokeWeight(2);
                    p.drawingContext.shadowBlur = 100;
                    p.drawingContext.shadowColor = 'red';

                    const xStart = p.random(p.width);
                    let xEnd = xStart;
                    let y = 0;
                    let branchCount = 0;
                    const maxBranches = Math.floor(p.random(1, 4)); // 1 to 3 branches

                    while (y < p.height && branchCount < maxBranches) {
                        const xOffset = p.random(-10, 10);
                        const yOffset = p.random(10, 20);
                        const newX = xEnd + xOffset;
                        const newY = y + yOffset;
                        p.line(xEnd, y, newX, newY);
                        if (p.random() < 0.25 && branchCount < maxBranches) {
                            this.drawBranch(p, newX, newY, yOffset);
                            branchCount++;
                        }
                        xEnd = newX;
                        y = newY;
                    }

                    p.drawingContext.shadowBlur = 0;
                };

                this.drawBranch = (p, startX, startY, branchLength) => {
                    let xEnd = startX;
                    let y = startY;
                    for (let i = 0; i < branchLength; i++) {
                        const xOffset = p.random(-5, 5);
                        const yOffset = p.random(5, 10);
                        const newX = xEnd + xOffset;
                        const newY = y + yOffset;
                        p.line(xEnd, y, newX, newY);
                        xEnd = newX;
                        y = newY;
                    }
                };

                p.windowResized = () => {
                    this.containerWidth = this.$refs.outerContainer.offsetWidth;
                    p.resizeCanvas(this.containerWidth, p.height);
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
        this.resizeObserver = new ResizeObserver((entries) => {
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

#lightning-container {
    margin: 0 auto;
    text-align: center;
}
</style>