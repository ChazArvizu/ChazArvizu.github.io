<template>
    <div class="viewport">
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
    </div>
    <button @click="restartAnimation" class="restart-button">Restart Animation</button>
</template>

<script>
import { gsap, EasePack } from 'gsap/all';

export default {
    mounted() {
        this.initAnimation();
    },
    methods: {
        initAnimation() {
            this.masterTimeline = gsap.timeline({ repeatDelay: 2 });

            this.masterTimeline
                .add(this.part1(), 0)
                .add(this.part2(), 0)
        },
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
            let batch1Distance = 30;
            let batch3Distance = 50;
            let batch6and8Distance = 180;
            let batch9and10Distance = 150;

            // first word: CHAZ
            lettersTimeline.set("#word1-c", { x: `-${batch9and10Distance}` });
            lettersTimeline.set("#word1-h", { y: `-${batch6and8Distance}` });
            lettersTimeline.set("#word1-a", { x: `-${batch1Distance}` });
            lettersTimeline.set("#word1-z", { x: `${batch1Distance}` });

            // second word: ARVIZU
            lettersTimeline.set("#word2-a", { x: `-${batch9and10Distance}` });
            lettersTimeline.set("#word2-r", { y: `${batch6and8Distance}` });
            lettersTimeline.set("#word2-v", { y: 140 });
            lettersTimeline.set("#word2-i", { x: -130 });
            lettersTimeline.set("#word2-z", { y: 180 });
            lettersTimeline.set("#word2-u", { x: `${batch3Distance}` });

            lettersTimeline
                .addLabel("batch1", 0)
                .addLabel("batch2", 0.2)
                .addLabel("batch3", 1)
                .addLabel("batch4", 4)
                .addLabel("batch5", 5)
                .addLabel("batch6", 8.75)
                .addLabel("batch7", 9)
                .addLabel("batch8", 9.5)
                .addLabel("batch9", 11)
                .addLabel("batch10", 12.75)

                .to("#word1-a, #word1-z", { x: 0, duration: 6 }, "batch1")
                .to("#word2-i", { x: 0, duration: 9 }, "batch2")
                .to("#word2-u", { x: 0, duration: 11 }, "batch3")
                .to("#word1-h", { y: 0, duration: 6 }, "batch4")
                .to("#word2-v", { y: 0, duration: 5 }, "batch5")
                .to("#word1-h", { y: 0, duration: 6 }, "batch6")
                .to("#word2-r", { y: 0, duration: 4.5 }, "batch7")
                .to("#word1-c, #word2-z", { y: 0, duration: 7 }, "batch8")
                .to("#word2-a", { x: 0, duration: 6 }, "batch9")
                .to("#word1-c", { x: 0, duration: 4.25 }, "batch10");

            return lettersTimeline;
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
    height: 25vh;
    padding-top: 2vh;
    background: black;
    color: red;
    overflow: hidden;
    position: relative;
    border-radius: 5px;
}

#title {
    font-family: 'Benguiat';
    text-align: center;
    z-index: 1;
}

#word1 {
    position: relative;
    text-decoration: underline;
    text-decoration-color: red;
    text-decoration-skip-ink: none;
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

.restart-button {
    border: 2px solid red;
    border-color: red;
    border-radius: 5px;
    background-color: black;
    color: red;
    font-family: 'Benguiat';
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 10px;
    font-size: small;
}

@media (max-width: 767px) {

    #word1 span,
    #word2 span {
        font-size: 11vw;
        -webkit-text-stroke: 0.2vw red;
        filter: drop-shadow(0 0 2vw red);
    }
}
</style>
