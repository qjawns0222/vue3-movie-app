<template>
    <div class="header">
        <Headline/>
        <Search />
        <MovieList />
    </div>
    
</template>
<script>
import Headline from'~/components/Headline'
import Search from'~/components/Search'
import MovieList from'~/components/MovieList'
export default {
    components:{
        Headline,
        Search,
        MovieList
    }
}
</script>
<style lang="scss" scoped>

.header{
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    font-size: 30px;
    font-weight: bolder;
}
</style>