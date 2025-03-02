<template>
    <section class="hero">
        <div class="hero_container">
            <div class="hero_text">
                <span class="hero_bar"/>
                <h1>
                    I'm Sergio, a <br/>
                        Full-Stack Web Developer.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida.
                </p>
            </div>
            <div class="hero_menu">
                <div class="hero_aboutme">
                    <h3>ABOUT ME</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida.
                    </p>
                    <v-btn
                        append-icon="mdi-arrow-right"
                        variant="plain"
                        class="hero_link_button"
                    >
                        LEARN MORE
                    </v-btn>
                </div>
                <v-divider inset></v-divider>
                <div class="hero_mywork">
                    <h3>MY WORK</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida.
                    </p>
                    <v-btn
                        append-icon="mdi-arrow-right"
                        variant="plain"
                        class="hero_link_button"
                    >
                        BROWSE PORTFOFOLIO
                    </v-btn>
                </div>
                <v-divider inset></v-divider>
                <div class="hero_followme">
                    <h3>FOLLOW ME</h3>
                    <div class="hero_links">
                        <span><v-icon size="x-large">mdi-facebook</v-icon></span>
                        <span><v-icon size="x-large">mdi-linkedin</v-icon></span>
                        <span><v-icon size="x-large">mdi-github</v-icon></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero_img">
            <img src="@/assets/img/profile.png" alt="profile">
        </div>
    </section>
</template>
<script setup>
console.log('hero here')
</script>
<style scoped>
.hero {
    display: flex;
    height: 95vh;
    min-height: 600px;
    position: relative;
    padding: 50px 50px 0 50px;
    align-items: center;
    overflow: hidden;
}
.hero_text {
    width: 100%;
    max-width: 530px;
}
.hero_menu {
    max-width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.hero_mywork, .hero_followme, .hero_aboutme{
    padding-top: 30px;
    padding-bottom: 30px;
}
.hero_aboutme h3 {
    padding-bottom: 15px;
}
.hero_link_button {
    padding-left: 0;
    opacity: 1;
    padding-top: 15px;
    font-size: 1rem;
    font-weight: bold;
    transition: transform 0.3s ease, color 0.3s ease;
}
.hero_link_button:hover {
  transform: translateY(-5px);
  color: #f0f0f0;
}
.hero_container {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
}
.hero_bar {
    display: block;
    background: white;
    height: 7px;
    width: 115px;
}
.hero_img {
    position: absolute;
    width: 100%;
    display: flex;
    bottom: 0;
    justify-content: center;
    z-index: 1;
}
.hero_img img {
  height: 100vh;
  max-width: 1000px;
  bottom: 0;
}
.hero_links {
    display: flex;
    padding-top: 20px;
}
.hero_links span {
    margin: 5px;
    padding-right: 5px;
}
.hero_links span i {
    cursor: pointer;
}

</style> 