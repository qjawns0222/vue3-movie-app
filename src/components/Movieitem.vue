<template>
    <RouterLink v-if="haveImg" :to="`/movie/${movie.imdbID}`" class="movies">
        
        <img :src="movie.Poster" alt="" :width="300" :height="500" class="movie">
        <Loading v-if="posterloading" class="load" :zindex="5" absolute />
        <div class="info">
            <div class="year">
                {{movie.Year}}
            </div>
            <div class="title">
                {{movie.Title}}
            </div>
            
        </div>
    </RouterLink>
</template>
<script>
import Loading from './Loading'
export default {
    data(){
        return{
            posterloading:true,
            haveImg:true
        }
    },
    components:{
        Loading
    },
    props: {
        movie:{
            type:Object,
            default:()=>({})
        }        
    },
    mounted(){
        this.init()
    },
    methods:{
        async init(){
            const post=this.movie.Poster

            if(!post || post==='N/A'){
                this.haveImg=false
                this.posterloading=false;
                return;
            }
            else{
                await this.$loadImage(this.movie.Poster)
                this.posterloading=false

            }
            
        }
    }
}
</script>
<style lang="scss" scoped>
$width:500px;

.movies{
    
    position: relative;
    margin: 15px;
    
    .load{
        top:30%;
        left: 30%;
    }
    .movie{
        width: $width;
        height: $width*1.5;
        z-index: 2;
        
        
    }
    .info{
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
    line-height: 100%;
    background-color: rgba(grey,0.8);
    position: absolute;
    bottom: 1px;
    width: 100%;
    height: 20%;
    backdrop-filter: blur(10px);
    .year{
        display: flex;
    flex-flow: column;
    justify-content: center;
        color: white;
        height: 50%;
    }
    .title{
    
    color:black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 48px;
    height: 50%;
    
    }
    }
    &:hover::after{
        content:"";
        position: absolute;
        top:0;
        bottom:0;
        right:0;
        left:0;
        border:10px solid red;
        }
}
@media screen and (max-width:1100px){
    $smwidth:250px;
    .movies{
    .movie{
        width: $smwidth;
        height: $smwidth*1.5;
        z-index: 2;
        
        
    }
    .info{

        height: 20%;
        padding: 3%;

        
    .year{
        font-size: 18px;
        height: 10%;
        color: white;
        
    }
    .title{
        height: 50px;

    font-size: 28px;
    }
    }
    &:hover::after{
        border:5px solid red;
        }
}
}

</style>