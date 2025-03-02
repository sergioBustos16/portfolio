<template>
    <div class="contact">
        <div class="contact_container">
            <div class="contact_title">
                <h2>Interested in working together?</h2>
                <div>
                    <h2>let's talk </h2>
                    <v-icon>mdi-arrow-right</v-icon>
                </div>
            </div>
            <div class="contact_form">
                <form @submit.prevent="submit">
                    <v-text-field
                        v-model="name"
                        label="Name"
                        variant="underlined"
                        min-width="400px"
                        width="100%"
                        max-width="600px"
                    />
                    <v-text-field
                        v-model="userEmail"
                        label="Email"
                        variant="underlined"
                        :error-messages="$v.email.$error ? 'Invalid email' : ''"
                        @blur="$v.email.$touch()"
                    />
                    <v-textarea 
                        label="Job/Project details"
                        v-model="description"
                        ></v-textarea>
                    <v-btn
                        append-icon="mdi-arrow-right"
                        variant="plain"
                        class="hero_link_button"
                    >
                        Contact me
                    </v-btn>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {useVuelidate} from '@vuelidate/core';
    import { required, email } from '@vuelidate/validators';

    const name = ref('');
    const userEmail = ref('');
    const description = ref('');

    const rules = {
        email: { required, email}
    }
    const $v = useVuelidate(rules, { email: userEmail })
</script>

<style scoped>
.contact {
    align-content: center;
    height: 80vh;
}
.contact_container {
    width: 90%;
    display: flex;
    justify-content: space-around;
}
.contact_title {
    max-width: 400px;
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
</style>