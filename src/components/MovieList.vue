<template>
    <div class="container">          
        <div :class="{'no-result':!movies.length}" class="inner"> 
            <Loading v-if="load" class="load" :z-index="9" absolute /> 
            <div v-if="message" class="message">
                
            {{message}}
            </div>
            <MovieItem  v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
        </div>
    </div>
</template>
<script>

import MovieItem from '~/components/Movieitem'
import Loading from '~/components/Loading'
export default {
    components: {
        MovieItem,
        Loading
        
        
        
        
    },
    computed:{
        movies(){ 
            return this.$store.state.movie.movies
        },
        message(){
            return this.$store.state.movie.message
        },
        load(){
            return this.$store.state.movie.loading
        }       
    }
}
</script>
<style lang="scss" scoped>

    


    .inner{
    position: relative;
    
    display: flex;
    flex-flow:row wrap;
    justify-content:center;
    align-items: center;
    font-size: 68px;
    background-color:rgba(grey,0.3);
    min-height: 500px;
    margin: 1.5%;
   
    
    }
@media screen and (max-width:1100px){
    .inner{

    font-size: 48px;
    
    min-height: 200px;
    margin: 1.5%;
   
    
    }
}
</style>