<template>
  <div class="detail">
    <div class="movie-detail">
      <div class="img-detail">
        <img :src="movies.image" alt="posters">
      </div>
      <div class="info-detail">
        <div class="txt-detail">
          <p>title :</p>
          <p>{{movies.title}}</p>
        </div>
        <div class="txt-detail">
          <p>genres :</p>
          <p>{{movies.genres}}</p>
        </div>
        <div class="txt-detail">
          <p>directors :</p>
          <p>{{movies.directors}}</p>
        </div>
        <div class="txt-detail">
          <p>writers :</p>
          <p>{{movies.writers}}</p>
        </div>
        <div class="txt-detail">
          <p>year :</p>
          <p>{{movies.year}}</p>
        </div>
        <div class="txt-detail">
          <p>imDb Ratings :</p>
          <p>{{movies.imDbRating ? movies.imDbRating : '-'}} from {{movies.imDbRatingVotes ? movies.imDbRatingVotes : "-"}} votes</p>
        </div>
        <div class="txt-detail">
          <p>release date :</p>
          <p>{{movies.releaseDate}}</p>
        </div>
        <div class="text-detail">
          <p>runtime :</p>
          <p>{{movies.runtimeMins ? movies.runtimeMins+" mins" : "-"}}</p>
        </div>
        <div class="text-detail">
          <p>stars :</p>
          <p>{{movies.stars}}</p>
        </div>
        <div class="text-detail">
        <p>plot :</p>
        <p>{{movies.plot}}</p>
        </div>
        <div class="text-detail">
          <p>languages :</p>
          <p>{{movies.languages}}</p>
        </div>
        <div class="text-detail">
          <p>companies :</p>
          <p>{{movies.companies}}</p>
        </div>
      </div>
    </div>
    <div class="videoWrapper"> 
      <iframe :src=movieTrailer></iframe>
    </div>
  </div>
</template>

<script>
  import { useRoute } from 'vue-router'
  import { onMounted, ref } from 'vue'
  export default {
    setup() {
      let movies = ref([])
      let movieTrailer = ref(null);
      const route = useRoute();

      onMounted(() => {
        async function getMovies() {
          const fetchMovies = await fetch(`https://imdb-api.com/en/API/Title/k_ui3301p6/${route.params.id}`)
          const results = await fetchMovies.json()
          movies.value = await results
          const fetchTrailer = await fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_ui3301p6/${route.params.id}`)
          const trailerResult = await fetchTrailer.json()
          movieTrailer.value = "https://www.youtube.com/embed/"+trailerResult.videoId
        }
        getMovies()
      }) 

      return {
        movies,
        movieTrailer
      }
    }
  }
</script>


<style>
  .detail {
    background-color: rgba(0, 0, 0, .9);
    margin: 0 50px
  }

  .movie-detail {
    display: flex;
    justify-content: space-between;
    padding-top: 80px;
  }

  .img-detail {
    width: 30%;
    margin-top: 50px;
    margin-right: 25px;
    margin-left: 50px;
    margin-bottom: 50px;
  }

  .img-detail img {
    height: 100%;
    width: 100%;
  }

  .info-detail {
    width: 60%;
    margin-top: 50px;
    margin-right: 50px;
    margin-left: 25px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
  }

  .txt-detail {
    display: flex;
    width: 100%;
    font-size: 1.2rem;
    margin: auto;
    padding-top: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid white;
    color: grey;
  }

  .txt-detail p:first-child {
    width: 30%;
  }

  .txt-detail p:last-child {
    width: 70%;
  }

.videoWrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}


</style>
