<template>
    <div class="viewport" @click="restartAnimation">
        <div id="stop-rect"></div>
        <div id="title">
            <div id="word1">
                <span id="word1-c">C</span>
                <span id="word1-h">H</span>
                <span id="word1-a">A</span>
                <span id="word1-z">Z</span>
            </div>
            <div id="word2">
                <span id="word2-a">A</span>
                <span id="word2-r">R</span>
                <span id="word2-v">V</span>
                <span id="word2-i">I</span>
                <span id="word2-z">Z</span>
                <span id="word2-u">U</span>
            </div>
        </div>
        <div class="boxes">
            <div id="top-box"></div>
            <div id="bottom-left-box"></div>
            <div id="bottom-right-box"></div>
        </div>
    </div>
</template>

<script>
import { gsap, EasePack } from 'gsap/all';

export default {
    mounted() {
        this.masterTimeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });

        this.masterTimeline
            .set("#top-box", { scaleX: 0, transformOrigin: "50% 50%" })
            .set("#bottom-left-box", { scaleX: 0, transformOrigin: "100% 50%" })
            .set("#bottom-right-box", { scaleX: 0, transformOrigin: "0% 50%" });

        this.masterTimeline
            .add(this.part1(), 0)
            .add(this.part2(), 0)
            .add(this.part3(), 15)
            .add(this.part4(), 19);
    },
    methods: {
        part1() {
            let scaleTimeline = gsap.timeline();
            scaleTimeline.set("#title", { transformOrigin: "48% 70%", scale: 4.9 });
            scaleTimeline.to("#title", {
                duration: 20,
                scale: 0.8,
                ease: EasePack.ExpoScaleEase.config(4.9, 0.8)
            });
            return scaleTimeline;
        },
        part2() {
            let lettersTimeline = gsap.timeline();

            // First name: CHAZ
            lettersTimeline.set("#word1-c", { x: -200 });
            lettersTimeline.set("#word1-h", { x: 200 });
            lettersTimeline.set("#word1-a", { y: -200 });
            lettersTimeline.set("#word1-z", { y: 200 });

            // Last name: ARVIZU
            lettersTimeline.set("#word2-a", { x: -200 });
            lettersTimeline.set("#word2-r", { x: 200 });
            lettersTimeline.set("#word2-v", { y: -200 });
            lettersTimeline.set("#word2-i", { y: 200 });
            lettersTimeline.set("#word2-z", { x: -200 });
            lettersTimeline.set("#word2-u", { x: 200 });

            lettersTimeline
                .to("#word1-c", { x: 0, duration: 6 }, "batch1")
                .to("#word1-h", { x: 0, duration: 6 }, "batch1")
                .to("#word1-a", { y: 0, duration: 6 }, "batch1")
                .to("#word1-z", { y: 0, duration: 6 }, "batch1")
                .to("#word2-a", { x: 0, duration: 6 }, "batch2")
                .to("#word2-r", { x: 0, duration: 6 }, "batch2")
                .to("#word2-v", { y: 0, duration: 6 }, "batch2")
                .to("#word2-i", { y: 0, duration: 6 }, "batch2")
                .to("#word2-z", { x: 0, duration: 6 }, "batch2")
                .to("#word2-u", { x: 0, duration: 6 }, "batch2");

            return lettersTimeline;
        },
        part3() {
            let boxesTimeline = gsap.timeline();
            boxesTimeline
                .set("#top-box", { scaleX: 0, transformOrigin: "50% 50%" })
                .set("#bottom-left-box", { scaleX: 0, transformOrigin: "100% 50%" })
                .set("#bottom-right-box", { scaleX: 0, transformOrigin: "0% 50%" })
                .to("#top-box", { scaleX: 1, duration: 1, ease: "power2.out" })
                .to("#bottom-left-box, #bottom-right-box", { scaleX: 1, duration: 0.75 }, "-=1");

            return boxesTimeline;
        },
        part4() {
            let visibilityTimeline = gsap.timeline();
            visibilityTimeline
                .to("#top-box", { scaleX: 1, duration: 1 })
                .to("#bottom-left-box", { scaleX: 1, duration: 1 }, "-=1")
                .to("#bottom-right-box", { scaleX: 1, duration: 1 }, "-=1");
            return visibilityTimeline;
        },
        restartAnimation() {
            this.masterTimeline.restart();
        }
    }
};
</script>

<style>
.viewport {
    display: grid;
    place-items: center;
    height: 30vh;
    padding-top: 5vh;
    /* Adjusted height to better fit viewports */
    background: black;
    color: red;
    overflow: hidden;
    position: relative;
}

#title {
    font-family: 'Benguiat', sans-serif;
    text-align: center;
    z-index: 1;
}

#stop-rect {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 10vw;
    height: 1vh;
    background-color: red;
    z-index: 2;
}

#word1 {
    position: relative;
    text-decoration: underline;
    text-decoration-color: red;
    text-decoration-skip-ink: none;
    text-underline-offset: 0.5vh;
}

#word2 {
    display: block;
}

#word1 span,
#word2 span {
    display: inline-block;
    font-size: 5vw;
    color: transparent;
    -webkit-text-stroke: 0.2vw red;
    filter: drop-shadow(0 0 1vw red);
}

#top-box,
#bottom-left-box,
#bottom-right-box {
    background: red;
    width: 100%;
    height: 1vh;
    position: absolute;
}

#top-box {
    top: 20%;
    /* Adjusted position */
    transform-origin: 50% 50%;
}

#bottom-left-box {
    bottom: 20%;
    /* Adjusted position */
    left: 0;
    transform-origin: 100% 50%;
}

#bottom-right-box {
    bottom: 20%;
    /* Adjusted position */
    right: 0;
    transform-origin: 0% 50%;
}

@media (max-width: 767px) {
    #title {
        font-size: 4vw;
    }

    #word1 span,
    #word2 span {
        font-size: 8vw;
        -webkit-text-stroke: none;
        filter: none;
    }

    #top-box,
    #bottom-left-box,
    #bottom-right-box {
        height: 0.5vh;
    }
}
</style>