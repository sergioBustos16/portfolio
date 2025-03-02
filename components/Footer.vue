<template>
    <div class="footer">
        <div class="footer_container">
            <div class="footer_profile_container">
                <div class="footer_profile">
                    <div class="footer_img_container">
                        <img src="../assets/img/profile.png" alt="sergio">
                    </div>
                    <div>
                        <h2>Sergio Bustos</h2>
                        <p>Full Stack Developer</p>
                    </div>
                </div>
                <div class="footer_links">
                    <span><v-icon size="x-large">mdi-facebook</v-icon></span>
                    <span><v-icon size="x-large">mdi-linkedin</v-icon></span>
                    <span><v-icon size="x-large">mdi-github</v-icon></span>
                </div>
            </div>
            <div class="footer_contact">
                <h1>Get in touch</h1>
                <div class="footer_buttons">
                    <v-btn
                        append-icon="mdi-arrow-right"
                        variant="plain"
                        class="hero_link_button"
                    >
                        sergiobustos69@gmail.com
                    </v-btn>
                </div>
            </div>
        </div>
        <div class="span_divider">
            <span></span>
        </div>
        <div class="footer_lower_container">
            <div class="footer_lower_container_links">
                <div class="footer_lower_container_links_item">
                    <h4 @click="redirectTo('/')">Home</h4>
                </div>
                <div class="footer_lower_container_links_item">
                    <h4 @click="redirectTo('/about')">About</h4>
                </div>
                <div class="footer_lower_container_links_item">
                    <h4 @click="redirectTo('/projects')">Projects</h4>
                </div>
                <div class="footer_lower_container_links_item">
                    <h4 @click="redirectTo('/contact')">Contact</h4>
                </div>
            </div>
            <div class="footer_lower_container_copyright">
                <p>Copyright &copy; 2025 Sergio Bustos</p>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function redirectTo(url) {
    router.push(url);
}
</script>

<style scoped>
.footer {
    display: flex;
    width: 100%;
    height: auto;
    min-height: 400px;
    max-height: 600px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.footer_container {
    width: 90%;
    display: flex;
    justify-content: space-between;
}
.footer_profile_container, .footer_contact {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.footer_profile {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
}
.footer_img_container {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
    background-color: #22282F;
    margin-right: 20px;
}

.footer_profile img {
    height: 200px;
    width: auto;
    transform: translateX(-25px);
}
.footer_profile p {
    font-size: 1.5rem;
}
.footer_links {
    display: flex;
    margin-left: 10px;
}
.footer_links span {
    margin: 5px;
    padding-right: 5px;
}
.footer_links span i {
    cursor: pointer;
}

.hero_link_button {
    padding-left: 0;
    opacity: 1;
    padding-top: 15px;
    font-size: 1rem;
    font-weight: bold;
    transition: transform 0.3s ease, color 0.3s ease;
    text-transform: lowercase;
}
.hero_link_button:hover {
  transform: translateY(-5px);
  color: #f0f0f0;
}

.span_divider {
    width: 90%;
    padding: 10px 0;
}
.span_divider span {
    display: block;
    width: 100%;
    height: 1px;
    background: white;
    opacity: 0.6;
}
.footer_lower_container {
    width: 90%;
    display: flex;
    justify-content: space-between;
}
.footer_lower_container_links {
    display: flex;
    justify-content: space-between;
}
.footer_lower_container_links_item {
    margin: 0 10px;
    cursor: pointer;
}
.footer_lower_container_links_item h4 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #f0f0f0;
}

.footer_lower_container_copyright {
    margin-left: 10px;
}

</style>