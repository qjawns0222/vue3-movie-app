<template>
<div class="container">
    <div v-if="loading" class="skeletons">
        <Load class="loading" :z-index="12" absolute />
        <div class="skeleton Poster"></div>
        <div class="specs">
            <div class="skeleton title"></div>
            <div class="skeleton spec"></div>
            <div class="skeleton plot"></div>
            <div class="skeleton etc"></div>
            <div class="skeleton etc"></div>
            <div class="skeleton etc"></div>
        </div>
    </div>
    
    <div v-else class="details">
        
        <div 
        :style=" {backgroundImage: `url(${movie.Poster}`} " 
        class="poster">
        <Load v-if="imageloading" class="subload" :z-index="12" absolute />
        </div>
        
        <div class="specs">
            <div class="title">
                {{movie.Title}}
            </div>
            <div class="spec">
                <div class="released">
                    {{movie.Released}}  
                </div>
                <div class="released">
                    {{movie.Runtime}}  
                </div>
                <div class="released">
                    {{movie.Genre}}  
                </div>
                
            </div>
            <div class="plot">
                {{movie.Plot}}
            </div>
            <div  class="ratings">
                <div v-for="{Source:name,Value:point} in movie.Ratings" :key="name" :title="name" class="rating">
                    <img :src="`https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/${name}.png`" :alt="name">
                    <span>{{point}}</span>
                </div>
                

            </div>
            <div class="actors">
                <h1>Actors</h1>
                {{movie.Actors}}
            </div>
            <div class="directors">
                <h1>Director</h1>
                {{movie.Director}}
            </div>
            <div class="production">
                {{movie.production}}
            </div>
        </div>
        
    </div>
</div>
</template>
<script>
import Load from'~/components/Loading'
export default {
    components:{
        Load
    },
    created() {
        this.$store.dispatch('movie/SearchmoviewithID',{id:this.$route.params.id})      
    },
    mounted(){
        this.init()
    },
    methods:{
        async init(){
            const post=this.movie.Poster
            if(!post || post==='N/A'){
                this.imageloading=false
            }
            else{
                await this.$loadImage(this.movie.Poster)
                this.imageloading=false

            }

            

        }

    },
    computed:{
        movie(){
            return  this.$store.state.movie.themovie
        },
        loading(){
            return  this.$store.state.movie.loading
        },
        resizeimg(url,size=700){
            return url.replace('SX300',`SX${size}`);
            
        }
    },
    data(){
        return{
            imageloading:true
        }
    }
}
</script>
<style lang="scss" scoped>
.container{
    $colorgrey: rgba(gainsboro,0.7);
    $radious:50px;
    
    
    padding: 1%;
    display:flex;
    .skeletons{
        position:relative;

        width: 100%;
        height: 1000px;
        display: flex;
        justify-content: space-between;
        .loading{
            top: 40%;
            left: 40%;
        }
        .Poster{
            
            width: 40%;
            height: 95%;
            background-color: $colorgrey;
            border-radius: $radious;
        }
        .specs{
            width: 60%;
            height: 95%;
            
            .title{
                background-color: $colorgrey;
                width: 95%;
                height: 10%;
                margin: 2%;
                border-radius: $radious;
            }
            .spec{
                background-color: $colorgrey;
                width: 55%;
                height: 5%;
                margin: 2%;
                border-radius: $radious;
            }
            .plot{
                background-color: $colorgrey;
                width: 95%;
                height: 40%;
                margin: 2%;
                border-radius: $radious;
            }
            .etc{
                background-color: $colorgrey;
                width: 55%;
                height: 5%;
                margin: 2%;
                border-radius: $radious;
            }
        }
    }
}
.details{
    $colorgrey: rgba(gainsboro,0.7);
    $radious:50px;
    $basemargin:1%;
    $bigfont:48px;
    $mediumfont:28px;
    $smallfont:18px;
    
    display:flex;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
    overflow: hidden;
   
   

    .poster{
        
        flex-shrink: 0;
        height: auto;
        max-width: 25%;
        min-width: 500px;
        
        background-size: cover;
        background-repeat: no-repeat;
        
       
        
        .subload{
            top:35%;
            left:15%;
        }

    }
    .specs{
    width: 50%;
    display: flex;
    flex-flow: column;
    
    margin:$basemargin;
    
    .title{
        margin: $basemargin;
        font-size: $bigfont;
        font-weight: bolder;
    }
    .spec{
        margin: $basemargin;
        display:flex;
        font-size: $mediumfont;
        font-weight: bolder;
        width: 100%;
        .released::after{
            content:"\00b7";
            margin:0px 10px;
            font-size: $mediumfont;
            font-weight: bolder;
            
            
        }
        .released:last-child::after{
            content: "";
        }

    }
    .plot{
        margin: 3% $basemargin;
        padding: 4%;
        background-color:$colorgrey ;
        border-radius: $radious;
        display:flex;
        font-size: $smallfont;
        font-weight: bolder;
        flex-wrap: wrap;
        
    }
    .actors,.directors{
        margin: $basemargin;
        font-size: $mediumfont;
        font-weight: bolder;
        h1{
            font-size: $bigfont;
        }
    }
    .ratings{
        
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        .rating{
            margin: $basemargin;
            font-size: $mediumfont;
            font-weight: bolder;
            display: flex;
            align-items: center;
            padding: 2%;
            background-color:$colorgrey ;
            border-radius: $radious;


        }
        


    }

    }
}
</style>