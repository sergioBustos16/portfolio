<template>
    <section class="about">
        <div class="about_container">
            <div class="about_text">
                <h3>ABOUT ME</h3>
                <span class="about_bar"></span>
                <h2 class="about_title">I've been developing web applications since 2019</h2>
                <p>
                    I'm Sergio Bustos, a Full Stack Developer passionate 
                    about crafting innovative solutions in fintech, 
                    telecommunications, and education. With expertise in Node.js, 
                    Vue.js, Nuxt and cloud platforms, alongside proficiency 
                    in microservices, Kafka, and UI design, I specialize in building 
                    scalable and user-centric applications.
                </p>
                <v-btn
                    append-icon="mdi-arrow-right"
                    variant="plain"
                    class="about_link_button"
                >
                    MORE ABOUT ME
                </v-btn>
            </div>
            <div class="about_img">
                <img src="@/assets/img/about.png" alt="">
            </div>
        </div>
        <div class="cust_divider">
            <span></span>
        </div>
        <div class="about_workedOn">
            <h3>Previously worked on</h3>
            <div class="about_chips">
                <v-chip>FinSana</v-chip>
                <v-chip>CSG</v-chip>
                <v-chip>Colegium</v-chip>
                <v-chip>RecaudoBogota</v-chip>
            </div>
        </div>
    </section>
</template>
<script setup>
</script>
<style scoped>
.about {
    background: #22282F;
    justify-items: center;
}
.about_container {
    width: 90%;
    min-height: fit-content;
    height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 30px;
}
.about_bar {
    display: block;
    background: white;
    height: 5px;
    width: 60px;
}
.about_text {
    padding-right: 15px;
}
.about_title {
    padding: 15px 0;
}
.about_img {
    display: flex;
}
.about_img img {
    width: 90%;
    min-width: 300px
}
.about_link_button {
    padding-left: 0;
    margin-top: 20px;
    opacity: 1;
    padding-top: 15px;
    font-size: 1rem;
    font-weight: bold;
    transition: transform 0.3s ease, color 0.3s ease;
}
.about_link_button:hover {
  transform: translateY(-5px);
  color: #f0f0f0;
}
.about_workedOn {
    display: flex;
    align-items: center;
    width: 90%;
    padding: 0 30px;
    height: 150px;
    justify-content: space-between;
}
.about_chips span{
    margin-right: 15px;
}
.cust_divider {
    width: 90%;
    padding: 10px 0;
}
.cust_divider span {
    display: block;
    width: 100%;
    height: 1px;
    background: white;
    opacity: 0.12;
}
</style>