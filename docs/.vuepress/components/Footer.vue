<template>
    <footer class="footer">
        <div class="footer-content">
            <h2></h2>
            <div class="links-container">
                <a href="https://www.linkedin.com/in/chaz-arvizu-11816b2a2" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon :icon="['fab', 'linkedin']" size="xl" />
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/ChazArvizu" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon :icon="['fab', 'github']" size="xl" />
                    <span>GitHub</span>
                </a>
            </div>
            <div class="footer-bottom">
                Made by ChazArvizu
                <img src="/babyduck.svg" alt="Baby Duck" class="babyduck-icon" />
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style scoped>
.footer {
    padding: 2rem 0;
    margin-top: 2rem;
}

.footer-content {
    max-width: 800px;
    margin: 0 auto;
}

.links-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
}

a {
    color: #e0e0e0;
    text-decoration: none;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

a:hover {
    color: #00aeff;
    text-decoration: underline;
}

.svg-inline--fa {
    margin-right: 0.5rem;
}

.footer-bottom {
    margin-top: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

.babyduck-icon {
    width: 32px;
    /* Adjust size as needed */
    height: 32px;
    /* Adjust size as needed */
    vertical-align: middle;
}
</style>