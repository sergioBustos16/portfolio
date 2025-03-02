<template>
    <div class="project-card" @click="navigateToProject">
        <div class="card-tags">
            <div class="tag">
                <span>React JS</span>
            </div>
            <div class="tag">
                <span>Web Development</span>
            </div>
        </div>
        <div class="card-title">
            <img src="assets\icons\tesla_logo_icon.png" alt="Project Image">
        </div>
        <div class="card-description">
            <h3>Tesla Clone Built with React JS.</h3>
        </div>
        <div class="card-image">
            <img src="assets\img\tesla.png" alt="Project Image">
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToProject = () => {
    router.push('/project/tesla-clone');
};
</script>
<style scoped>
.project-card {
    /* border: 1px solid red; */
    height: 620px;
    width: 500px;
    background-color: #2d343f;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30px;
    padding-top: 20px;
    align-items: center;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    cursor: pointer;
}
.card-tags {
    height: 50px;
    width: 90%;
    display: flex;
    justify-content: flex-end;
}
.tag {
    height: 100%;
    width: max-content;
    border-radius: 10px;
    background-color: #5d6c83;
    align-content: center;
    text-align: center;
    margin-right: 10px;
}
.tag span {
    color: #fff;
    padding: 5px 15px;
}
.card-title {
    min-height: fit-content;
    width: 90%;
}
.card-description {
    min-height: fit-content;
    width: 90%;
}
.card-description h3 {
    font-size: 2rem;
}
.card-image {
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
    transition: transform 0.5s ease-in-out;
    align-items: flex-end;
    padding-bottom: 10px;
}
.card-image img {
    height: fit-content;
    width: 95%;
    object-fit: contain;
    border-radius: 20px;
}
.card-title img {
    height: 80px;
}
.project-card:hover {
    transform: scale(1.05);
    transition: transform 0.5s ease-in-out;
}
.project-card:hover .card-image {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
}
@media (min-width: 1800px) {
    .project-card {
        width: 600px;
        height: 700px;
    }
}
</style>

