<template>
	<nav>
		<div class="logo"><p>Mo.vue</p></div>
		<ul class="nav-list">
			<li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
			<li><router-link class="link" :to="{name: 'MostPopular'}">Most Popular</router-link></li>
			<li><router-link class="link" :to="{name: 'BoxOffice'}">Box Office</router-link></li>
			<li><router-link class="link" :to="{name: 'ComingSoon'}">Coming Soon</router-link></li>
		</ul>
		<div class="search-btn">
			<input type="text" placeholder="movie name" v-model="movieInput">
			<button class="btn" @click="directTo">search</button>
		</div>
	</nav>
</template>

<script>
	import { ref } from 'vue'
	import { useRouter } from 'vue-router'
	
	export default {
		setup(){
		const router = useRouter();
		let movieInput = ref('');

		function directTo(event){
			router.push({name: 'Search', params:{name: movieInput.value}})
			movieInput.value = ''
		}
		return { movieInput, directTo }
		}
	}
</script>

<style>
	nav {
		width: 100%;
		height: 70px;
		z-index: 1;
		position: fixed;
		display: flex;
		justify-content: space-around;
		background-color: rgba(0, 0, 0, .1);
	}

	.logo {
		color: white;
		font-size: 25px;
		font-weight: bold;
		margin-top: 20px;
		margin-left: 50px;
	}

	.nav-list {
		display: flex;
		justify-content: space-around;
		font-size: 25px;
		margin-top: 20px;
	}

	.nav-list li {
		margin-right: 15px;
		text-decoration: none;
		list-style-type: none;
	}

	.nav-list li .link {
		text-decoration: none;
		color: white;
	}

	.search-btn {
		margin-top: 20px;
		margin-right: 50px;
	}

	.search-btn input, .btn {
		color: white;
		background-color: transparent;
		padding: 10px 15px;
		border: 1px solid white;
		border-radius: 3px;
	}

	.search-btn .btn {
		display: inline-block;
		text-decoration: none;
		cursor: pointer;
	}

</style>