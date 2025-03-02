<template>
    <div class="skill_card">
        <div class="skill_icon">
             <v-icon size="80px" :color="props.color">{{  props.icon }}</v-icon>
        </div>
        <div class="skill_text">
            <h2>{{ props.title }}</h2>
            <p>{{ props.description }}</p>
        </div>
        <span class="skill_divider"></span>

    </div>
</template>

<script setup>
const props = defineProps({
    color: {
        type: String,
        required: true,
        default: 'white'
    },
    icon: {
        type: String,
        required: true,
        default: 'mdi-language-javascript'
    },
    title: {
        type: String,
        required: true,
        default: 'Title'
    },
    description: {
        type: String,
        required: true,
        default: 'Duis aute irure dolor in reprehenderit in voluptate'
    }
})
</script>
<style scoped>
.skill_card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    border-radius: 30px;
    background: #22282F;
    color: white;
    margin: 10px;
    width: 350px;
    height: 450px;
}
.skill_divider {
    display: block;
    height: 4px;
    width: 60px;
    background: white;
}
.skill_icon {
    height: 80px;
    width: 80px;
}
.skill-icon i {
    height: 100%;
}
.skill_text{
    margin: 15px 0px 40px 0px;
}
</style>