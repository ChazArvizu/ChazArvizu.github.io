<template>
    <div class="timeline">
        <div v-for="(event, index) in events" :key="index" class="timeline-item"
            :class="isMobile ? 'left' : (index % 2 === 0 ? 'left' : 'right')">
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
    name: 'TimeLine',
    props: {
        events: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            isMobile: false
        };
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkMobile);
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth <= 600;
        }
    }
}
</script>

<style scoped>
.timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
}

.timeline::after {
    content: '';
    position: absolute;
    width: 3px;
    background-color: var(--c-border);
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 10px;
}

.timeline-item {
    padding: 10px 20px;
    position: relative;
    width: 50%;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
}

.timeline-item.left {
    left: 0;
    justify-content: flex-end;
}

.timeline-item.right {
    left: 50%;
    justify-content: flex-start;
}

.timeline-item::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: var(--c-bg);
    border: 3px solid var(--c-brand);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
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
