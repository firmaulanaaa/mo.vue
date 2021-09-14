<template>
	<Navbar/>
	<div class="landing-wrapper">
		<div class="landing-page" :style="{ backgroundImage: `url(${movie.poster.link})`}">
			<div class="text">
				<h2>{{movie.title}}</h2>
				<p>{{movie.genres}}</p>
				<router-link class="text-btn" :to="{name: 'Detail', params:{id: movie.id}}">detail</router-link>
			</div>
		</div>
	</div>
	<Content></Content>
</template>

<script>
	import Content from '../components/Content.vue'
	import Navbar from '../components/Navbar.vue'
	import {onMounted,reactive} from 'vue'
	import axios from 'axios'
	export default {
		components: { Content, Navbar },
		setup(){

			const movie = reactive({
				id: 'id',
				title: '',
				genres: '',
				poster: ''
			})

			async function fetchLandingPage() {
					//get best movie
					try {
						const response = await axios.get('https://imdb-api.com/en/API/MostPopularMovies/k_ui3301p6')
						movie.id = await response.data.items[0].id


						//get movie data
						const resMovie = await axios.get(`https://imdb-api.com/en/API/Title/k_ui3301p6/${movie.id}`)
						movie.title = await resMovie.data.title


						//get poster
						const resPoster = await axios.get(`https://imdb-api.com/API/Posters/k_ui3301p6/${movie.id}`)
						movie.poster = await resPoster.data.backdrops.[0]
					} catch(error) {
						console.log(error)
					}

				}

			onMounted(()=>{
				fetchLandingPage()
			})

			return { movie }
		}
	}
</script>

<style>
	.landing-wrapper {
		margin: 0;
	}

	.landing-page {
		width: 100%;
		height: 90vh;
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
	}

	.landing-page::before {
		content: "";
		position: relative;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .4);

	}

	.text {
		position: absolute;
		align-items: center;
		width: 80%;
		margin: auto;
		bottom: 120px;
		text-transform: uppercase;
	}

	.text h2 {
    font-size: 64px;
    color: white;
	}

	.text p {
		margin-top: -20px;
		font-size: 18px;
		font-style: italic;
		color: white;
	}

	.text .text-btn {
		display: inline-block;
		padding: 10px 40px;
    margin-top: 10px;
		border: 2px solid white;
		border-radius: 5px;
    color: white;
    background-color: transparent;
    text-decoration: none;
	}
</style>