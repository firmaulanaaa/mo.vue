<template>
  <Navbar/>
  <div class="container">
    <div class="wrapper">
      <div class="movie"  v-for="movie in movies" :key="movie.id">
        <div class="movie-image" :style="{ backgroundImage: `url(http://img.omdbapi.com/?apikey=f952b0c9&i=${movie.id})`}"></div>
        <div class="movie-info">
          <h2 class="title">{{ movie. title}}</h2>
          <p class="year">{{ movie.year }}</p>
          <p class="fa fa-star">{{ movie.imDbRating ? movie.imDbRating : '-'}}/10</p>
          <p class="crew">crew : {{ movie.crew }}</p>
          <router-link :to="{name: 'Detail', params:{id: movie.id}}" class="fa router-button">Detail</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import { onMounted, ref } from 'vue'
  import axios from 'axios'

  export default {
    components: {
      Navbar,
    },
    setup() {
      let movies = ref([])

      async function getMovies() {
        try {
          const response = await axios.get('https://imdb-api.com/en/API/MostPopularMovies/k_ui3301p6')
          movies.value = await response.data.items.slice(0,30)
        } catch (error) {
          console.error(error);
        }
      }

      onMounted(() => {
        getMovies()
      }) 

      return {
        movies
      }
    }
  }

</script>

<style scoped>
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 150px 0;
  }

  .wrapper {
    max-width: 700px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .movie {
    width: 200px;
    height: 500px;
    background: #1e1b26;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    box-shadow: 0 0 20px black;
    margin-top: 20px;
  }

  .movie-image {
    height: 55%;
    width: 100%;
    position: relative;
    background: rgb(30, 27, 38);
    background-size: cover;
    background-blend-mode: screen;
    -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, black),color-stop(0.35, black), color-stop(0.5, black), color-stop(0.65, black), color-stop(0.85, rgba(0, 0, 0, 0.6)), color-stop(1, transparent));
  }

  .movie-info {
    color: #bbb;
    font-family: "Open Sans", sans-serif;
    padding: 15px;
  }

  .movie-info p {
    padding-top: 10px;
  }

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    font-size: 1.5rem;
  }


  .movie-text {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .movie-text p:nth-child(1) {
    font-size: 0.8rem;
  }


  .crew {
    font-size: 0.8rem;
    font-style: italic;
    color: #bbb;
  }
  
  .fa {
    color: #f44336;
    margin-right: 5px;
  }

</style>