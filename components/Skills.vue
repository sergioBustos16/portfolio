<template>
    <section class="skills">
        <div class="skills_container">
            <h4>MY SKILLS</h4>
            <span class="about_bar"></span>
            <h2>Some of my main Skills</h2>
            <div class="carrousel_container">
                <v-slide-group show-arrows>
                    <v-slide-group-item
                    v-for="icon in icons"
                    :key="icon.title"
                    >
                        <Skill :color="icon.color" :icon="icon.icon" :title="icon.title" :description="icon.description"/>
                    </v-slide-group-item>
                </v-slide-group>
            </div>
        </div>
    </section>
</template>
<script setup>
console.log('skills component here')
const icons = [
    {   
        color: '#E34F26',
        icon: 'mdi-language-html5',
        title: 'HTML & CSS',
        description: 'HTML & CSS description'
    },
    {
        color: '#F7DF1E',
        icon: 'mdi-language-javascript',
        title: 'Javascript',
        description: 'javascript description'
    },
    {
        color: '#3178C6',
        icon: 'mdi-language-typescript',
        title: 'Typescript',
        description: 'Typescript description'
    },
    {
        color: '#42B883',
        icon: 'mdi-vuejs',
        title: 'VueJS',
        description: 'VueJS description'
    },
    {
        color: '#8CC84B',
        icon: 'mdi-nodejs',
        title: 'NodeJS',
        description: 'NodeJS description'
    },
    {
        color: '#61DAFB',
        icon: 'mdi-react',
        title: 'ReactJS',
        description: 'ReactJS description'
    },
    {
        color: '#00758F',
        icon: 'mdi-database',
        title: 'Databases',
        description: 'MySQL/PostreSQL description'
    },
    {
        color: '#2496ED',
        icon: 'mdi-docker',
        title: 'Docker',
        description: 'Docker description'
    },
    {
        color: '#4285F4',
        icon: 'mdi-google-cloud',
        title: 'Google cloud',
        description: 'Google cloud description'
    },
    {
        color: '#623CE4',
        icon: 'mdi-terraform',
        title: 'Terraform',
        description: 'Terraform description'
    },
    
    
]
</script>
<style scoped>
.skills {
    justify-items: center;
}
.skills_container {
    width: 90%;
    min-height: fit-content;
    height: 90vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 50px 30px;
}
.about_bar {
    display: block;
    background: white;
    height: 4px;
    width: 60px;
    margin-bottom: 15px;
}
.carrousel_container {
    padding-top: 30px;
    width: 100%;
}
</style>