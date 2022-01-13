<template>
    <div class="container">
        <div class="img"><img src='~/assets/logo.png' :alt="name"></div>
        <div class="specs">
            <div class="name">{{ name }}</div>
            <div class="number">{{number}}</div>
            <div class="email">{{email}}</div>
        </div>
        
    </div>
</template>
<script>
import Loading from'~/components/Loading'
import Logo from'~/components/Logo'
export default {
    computed:{
        name(){
            return this.$store.state.about.name
        },
        number(){
            return this.$store.state.about.number
        },
        email(){
            return this.$store.state.about.email
        },
        img(){
            return this.$store.state.about.img
        },
    },
    components:{
        Logo,
        Loading
    },
    data(){

    }
}
</script>
<style lang="scss" scoped>
.container{
    $colorgrey: rgba(gainsboro,0.7);
    $radious:10px;
    $basemargin:1%;
    $bigfont:48px;
    $mediumfont:28px;
    $smallfont:18px;
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    margin: 0;
    padding: 0;
    .img {
        display: flex;
        border: 6px solid red;
        border-radius: 50%;
        background-color: black;
        justify-content: center;
        margin:$basemargin;
        img{
            width: 80%;
            
        }
    }
    .specs{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: black;
        padding: $basemargin;
        border-radius: $radious;
        .name{
        font-size: $bigfont;
        margin: $basemargin;
        background-color: $colorgrey;
        border-radius: $radious;
        padding: $basemargin*10;
        color:white;
            font-weight: bolder;
        }
        .number{
            font-size: $mediumfont;
            margin: $basemargin;
            color:white;
            font-weight: bolder;
            padding: $basemargin;
        }
        .email{
            font-size: $mediumfont;
            margin: $basemargin;
            color:white;
            font-weight: bolder;
            padding: $basemargin;
        }
    }
    

}
</style>