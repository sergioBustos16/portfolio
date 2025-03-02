<template>
    <div class="default_layout">
        <Header/>
        <NuxtPage />
        <Footer/>
    </div>
</template>
<style>
.default_layout{
  background-color: #1B1F24;
  min-height: 100vh;
  background-attachment: fixed;
  color: white;
  font-family: 'Roboto', sans-serif;
}
.default_layout h1{
    font-size: 4rem;
}
.default_layout h2{
    font-size: 2.7rem;
}
.default_layout h3{
    font-size: 1.7rem;
}
.default_layout h4{
    font-size: 1.3rem;
}
.default_layout p{
    font-size: 1.1rem;
    opacity: 0.7;
}
button > span {
    font-size: 1.2rem;
}
</style>