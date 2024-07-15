<template>
    <div class="card-wrapper" @click="navigateToLink" :class="{ 'clickable': link }">
        <div class="card">
            <img v-if="image" :src="image" alt="Card Image" class="card-image" />
            <div class="card-content">
                <p class="card-title">{{ title }}</p>
                <p class="card-description">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    image: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: false,
    },
});

const router = useRouter();

const isClickable = computed(() => !!props.link);

const navigateToLink = () => {
    if (props.link) {
        router.push(props.link);
    }
};
</script>

<style scoped>
.card-wrapper {
    margin-bottom: 3%;
}

.card-wrapper.clickable {
    cursor: pointer;
}

.card {
    position: relative;
    z-index: 0;
    border: 2px solid #00aeff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.clickable:hover .card {
    transform: translateY(-5px);
}

.card-image {
    height: auto;
    display: block;
}

.card-content {
    padding: 16px;
}

.card-title {
    margin: 0 0 8px;
    font-size: 1.25rem;
    font-weight: bold;
}

.card-description {
    margin: 0;
    font-size: 1rem;
}
</style>