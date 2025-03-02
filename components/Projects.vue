<template>
    <section class="projects">
        <div class="projects-container">
            <div class="project_container_left">
                <div class="project_container_description">
                    <h4>MY PROJECTS</h4>
                    <span class="projects_bar"></span>
                    <h2>Take a look at the latest project I've done.</h2>
                </div>
                <ProjectCard/>
            </div>
            <div class="project_container_right">
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style scoped>
.projects {
    background: #22282F;
    min-height: fit-content;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 50px;
}
.projects-container {
    height: 100%;
    min-height: fit-content;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.projects_bar {
    display: block;
    background: white;
    height: 5px;
    width: 60px;
}
.project_container_left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
}
.project_container_right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
}
</style>