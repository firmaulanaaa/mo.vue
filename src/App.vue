<template>
  <router-view/>
  <Footer />
</template>

<script>
  import Footer from './components/Footer.vue'
  export default {
    components: { Footer }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@100&display=swap');
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /*font-family: "Open Sans",sans-serif;*/
  }

  body {
    background-color: #212529; 
  }
  .router-button {
    width: -webkit-fill-available;
    margin-top: 20px;
    padding: 10px 0;
    color: #f44336;
    font-family: Poppins;
    font-weight: bold;
    font-size: 1rem;
    border: 1px solid #f44336;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
  }

  .router-button:hover {
    color: #eee;
    background-color: #f44336;
  }
</style>