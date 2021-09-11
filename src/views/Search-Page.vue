<template>
	<div class="container">
    <div class="card"  v-for="movie in movies" :key="movie.imdbID">
      <div class="card-img" :style="{ backgroundImage: `url(${movie.Poster})`}"></div>
      <div class="summary">
        <h2>{{ movie. Title}} <span>{{movie.Year}}</span></h2>
        <router-link :to="{name: 'Detail', params:{id: movie.imdbID}}" class="dtl-btn">Detail</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, onUpdated } from 'vue'
  import { useRoute } from 'vue-router'

  export default {
    setup() {
      const route = useRoute();
      let movies = ref({});

      async function getMovie() {
        const fetchMovies = await fetch(`http://www.omdbapi.com/?apikey=f952b0c9&s=${route.params.name}`)
        const movieData = await fetchMovies.json()
        movies.value = await movieData.Search
        console.log(movies.value)
      }

      onUpdated(()=> getMovie())

      return { movies }
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
    position: relative;
    width: 200px;
    height: 350px;
    background: #1e1b26;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    margin: 0 20px 20px 20px;
    box-shadow: 0 0 20px black;
  }

  .card-img {
    height: 65%;
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
    font-size: 1rem;
  }

  .summary h2 span {
    font-size: 0.8rem;
  }

  .dtl-btn {
    position: absolute;
    display: block;
    padding: 10px 62px;
    bottom: 10px;
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
</style>