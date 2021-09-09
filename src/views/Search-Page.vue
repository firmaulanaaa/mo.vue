<template>
	<div class="card-wrapper">
  <div class="card" v-for="movie in movies" :key="movie.title">
      <img :src="movie.Poster" :alt="movie.Title">
    <div class="card-info">
      <h2>{{movie.Title}}</h2>
      <p>Movie | action, comedy | English | 2021</p>
      <p><span>directed by</span> Shawn Levy</p>
      <p><span>actors</span> Ryan Reynolds Jodie Comer Taika Waititi</p>
      <p>"A bank teller discovers that he's actually an NPC inside a brutal, open world video game."</p>
			<router-link :to="{name: 'Detail', params:{id: movie.imdbID}}" class="card-btn">Detail</router-link>
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

.card-wrapper{
  padding-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #000814;
}

.card {
  display: flex;
  width: 700px;
  margin-top: 15px;
  padding: 20px;
  border: 1px white solid;
  border-radius: 5px;
}
.card img{
  width: 130px;
  height: 200px;
  border-radius: 5%;
}

.card .card-info {
  color: #FFFFFF;
	padding-left: 15px;
}

.card-info h2 {
  font-family: 'Anton', sans-serif;
  letter-spacing: 4px;
}

.card-info p {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
	line-height: 1;
	padding-top: 5px;
}

.card-info p span {
  font-size: 12px
}

.card-info .card-btn {
  display: inline-block;
	margin-top: 20px;
	padding: 10px 0;
	border-radius: 5px;
	border: 1px white solid;
	background-color: transparent;
	color: #FFFFFF;
	width: -webkit-fill-available;
	cursor: pointer;
  text-decoration: none;
}
</style>