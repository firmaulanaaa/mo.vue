<template>
  <Navbar/>
  <router-view/>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  export default {
    components: {
      Navbar,
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@100&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Open Sans",sans-serif;
  }

  body {
    background-color: #212529; 
  }
</style>