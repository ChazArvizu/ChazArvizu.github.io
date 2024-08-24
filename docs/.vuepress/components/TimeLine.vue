<template>
    <div class="timeline">
        <div v-for="(event, index) in events" :key="index" class="timeline-item" :class="[
            isMobile ? 'left' : index % 2 === 0 ? 'left' : 'right',
            'hidden' // Add hidden class initially for fade-in effect
        ]" ref="timelineItems">
            <div class="timeline-content">
                <div class="timeline-date">{{ event.date }}</div>
                <h3 class="timeline-title">{{ event.title }}</h3>
                <p class="timeline-description">{{ event.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TimeLine",
    props: {
        events: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            isMobile: false,
        };
    },
    mounted() {
        this.checkMobile();
        window.addEventListener("resize", this.checkMobile);
        this.setupIntersectionObserver(); // Set up the observer when the component is mounted
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.checkMobile);
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth <= 600;
        },
        setupIntersectionObserver() {
            const options = {
                threshold: 0.1, // Trigger the fade-in when 10% of the element is visible
            };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in"); // Add the fade-in class
                        observer.unobserve(entry.target); // Stop observing once it's visible
                    }
                });
            }, options);

            this.$refs.timelineItems.forEach((item) => {
                observer.observe(item);
            });
        },
    },
};
</script>

<style scoped>
.timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
}

/* Vertical timeline line */
.timeline::after {
    content: "";
    position: absolute;
    width: 3px;
    background-color: var(--c-border);
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    /* Center the line perfectly */
    margin-top: 10px;
    z-index: 0;
    /* Ensure the line stays behind other elements */
}

/* Timeline item styling */
.timeline-item {
    padding: 10px 20px;
    position: relative;
    width: 50%;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    /* Initially hide the timeline items */
    transform: translateY(20px);
    /* Add some initial offset for the fade-in effect */
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    /* Smooth fade-in and move-up */
    z-index: 1;
    /* Ensure items are above the line */
}

.timeline-item.left {
    left: 0;
    justify-content: flex-end;
}

.timeline-item.right {
    left: 50%;
    justify-content: flex-start;
}

/* Circle marker */
.timeline-item::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: var(--c-bg);
    border: 3px solid var(--c-brand);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    /* Ensure the circle appears above the line */
}

.timeline-item.left::before {
    right: -12px;
}

.timeline-item.right::before {
    left: -12.5px;
}

.timeline-content {
    padding: 20px;
    background-color: var(--c-bg-light);
    position: relative;
    border-radius: 5px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
    width: 90%;
}

/* Timeline date and description */
.timeline-date {
    font-size: 1em;
    color: var(--c-text-lighter);
}

.timeline-title {
    color: var(--c-brand);
}

.timeline-description {
    margin: 0;
    font-size: 0.95em;
    line-height: 1.5;
    color: var(--c-text);
}

/* Hidden class for initial state */
.hidden {
    opacity: 0;
    transform: translateY(20px);
    /* Move down slightly for a nice fade-up effect */
}

/* Fade-in animation class */
.fade-in {
    opacity: 1;
    transform: translateY(0);
}

/* Mobile responsiveness */
@media screen and (max-width: 600px) {
    .timeline::after {
        left: 31px;
    }

    .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
        justify-content: flex-start;
    }

    .timeline-item::before {
        left: 17px;
    }

    .timeline-content {
        width: calc(100% - 50px);
    }
}
</style>
