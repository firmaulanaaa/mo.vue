<template>
  <div class="container">
    <div class="card"  v-for="movie in movies" :key="movie.id">
      <div class="card-img" :style="{ backgroundImage: `url(${movie.image})`}"></div>
      <div class="summary">
        <h2>{{ movie. title}} <span>{{movie.year}}</span></h2>
        <p>directed by <span>{{ movie.directors }}</span></p>
        <p>{{movie.genres}}</p>
        <p>coming up in <span>{{movie.releaseState}}</span></p>
          <router-link :to="{name: 'Detail', params:{id: movie.id}}" class="fa router-button">Detail</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue'

  export default {
    setup() {
      let movies = ref([])

      onMounted(() => {
        async function getMovies() {
          const fetchMovies = await fetch('https://imdb-api.com/en/API/ComingSoon/k_ui3301p6')
          const results = await fetchMovies.json()
          movies.value = await results.items
          console.log(movies.value)
        }
        getMovies()
      }) 

      return {
        movies
      }
    }
  }

</script>

<style>
  .container {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 150px 0;
    margin: 0 70px;
  }

  .card {
    width: 200px;
    height: 500px;
    background: #1e1b26;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    margin: 0 20px 20px 20px;
    box-shadow: 0 0 20px black;
  }

  .card-img {
    height: 55%;
    width: 100%;
    position: relative;
    background: rgb(30, 27, 38);
    background-size: cover;
    background-blend-mode: screen;
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, black),color-stop(0.35, black), color-stop(0.5, black), color-stop(0.65, black), color-stop(0.85, rgba(0, 0, 0, 0.6)), color-stop(1, transparent));
  }

  .summary {
    color: #bbb;
    font-family: "Open Sans", sans-serif;
    padding: 15px;
  }

  .summary p {
    padding-top: 10px;
    letter-spacing: 2px;
    font-size: 0.8rem;
    color: #bbb;
  }

  .summary p span {
    font-weight: bold;
  }

  .summary h2 {
    font-size: 1.5rem;
  }

  .summary h2 span {
    font-size: 1rem;
  }
  

</style>