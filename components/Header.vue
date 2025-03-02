<template>
    <div class="header_container">
        <v-app-bar
            class="header_bar"
        >
            <v-app-bar-title class="header-text">Sergio Bustos</v-app-bar-title>
            <div class="header-links">
                <v-btn>Home</v-btn>
                <v-btn>About</v-btn>
                <v-btn>Projects</v-btn>
                <v-btn>Contact</v-btn>
            </div>
            <div>
                    <v-btn variant="plain" color="primary" class="d-flex align-center">
                    <span>light</span>
                    <v-icon size="large">{{ isDarkMode ? 'mdi-toggle-switch' : 'mdi-toggle-switch-off' }}</v-icon>
                    <span>dark</span>
                </v-btn>
            </div>
            <div style="padding-right: 5px;">
                <v-btn rounded="xl" class="contact-btn">
                    Contact me
                </v-btn>
            </div>
        </v-app-bar>
    </div>
</template>
<script setup lang="ts">
const isDarkMode = ref(false);
const active = ref(true);

</script>
<style scoped>
.header_container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
}
.header_bar{
    position: relative !important;
    max-width: 80%;
    background-color: transparent !important;
    box-shadow: none !important;
}
.header-text {
    color: white !important;
}
.header-links {
    display: flex;
    justify-content: space-between;
    width: 50%;
    color: white;
}
.contact-btn {
    background: #380858;
    color: white;
}
</style>