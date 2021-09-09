<template>
	<div class="content">
		<h1>in theaters right now</h1>
		<div class="content-wrapper">
    <div class="movie"  v-for="movie in movies" :key="movie.id">
      <div class="movie-image" :style="{ backgroundImage: `url(${movie.image})`}"></div>
      <div class="movie-info">
        <h2 class="title">{{ movie. title}} <span>{{movie.year}}</span></h2>
        <p class="info-data">directed by <span>{{ movie.directors }}</span></p>
        <p class="info-data">{{movie.genres}}</p>
        <p class="info-data"><span>{{movie.releaseState}}</span></p>
        <router-link :to="{name: 'Detail', params:{id: movie.id}}" class="fa router-button">Detail</router-link>
      </div>
    </div>
  </div>
	</div>
</template>

<script>
	import { onBeforeMount, ref } from 'vue'

	export default {
		setup() {
			let movies = ref([]);

			const getMovies = async () => {
          const fetchMovies = await fetch('https://imdb-api.com/en/API/InTheaters/k_ui3301p6')
          const results = await fetchMovies.json()
          movies.value = results.items
       }
      onBeforeMount(() => getMovies())
      
     	return { movies }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		margin-top: 50px;
	}

	.content h1 {
		color: white;
		margin-left: 50px;
	}

  .content-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin: 10px 70px;
  }

  .movie {
    width: 200px;
    height: 500px;
    background: #1e1b26;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    margin: 0 20px 20px 20px;
    box-shadow: 0 0 20px black;
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
    letter-spacing: 2px;
  }

  .title {
    font-size: 1.5rem;
  }

  .title span {
    font-size: 1rem;
  }

  .movie-text {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }


  .summary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    /*margin: 5px 0;*/
  }

  .info-data {
    font-size: 0.8rem;
    color: #bbb;
  }

  .info-data span {
    font-weight: bold;
  }

  .router-button {
    width: -webkit-fill-available;
    margin-top: 20px;
    padding: 10px 0;
    color: #f44336;
    font-size: 1rem;
    border: 1px solid #f44336;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
  }

  .router-button {
    text-decoration: none;
  }

  .router-button:hover {
    color: #eee;
    background-color: #f44336;
  }
  
</style>