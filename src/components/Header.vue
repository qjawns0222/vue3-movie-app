<template>
    <header>
        <Logo />
        <div class="nav">
            <div class="item">
                <div
                v-for="nav in navigations"
                :key="nav.name"
                class="nav-item">
                    <RouterLink
                    :to="nav.href"
                    :class="{active:isMatch(nav.path)}"
                    active-class="active"
                    class="nav-link">
                        {{nav.name}}
                    </RouterLink>
                </div>
            </div>
        </div>
        <div class="img" @click="toabout"><img  @click="toabout" src="../assets/logo.png" alt=""></div>
    </header>
</template>
<script>
import Logo from '~/components/Logo'

export default {
    components:{
        Logo
    },
    data() {
        return{
            navigations:[
                {
                    name:'Search',
                    href:'/'
                },
                {
                    name:'Movie',
                    href:'/movie/tt4520988',
                    path:/^\/movie/
                },
                {
                    name:'About',
                    href:'/about'
                }
            ],
            
        }
    },
    methods:{
        isMatch(path){
            if(!path) return false
            return path.test(this.$route.fullPath)
        },
        toabout(){
            
            return this.$router.push('/about')
        }
    }
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
}
body{
    
    width: 100%;
}
header{
    display:flex;
    align-items: center;
    background-color: black;
    width: 100%;
    .nav{
    width:100%;
    display: flex;
    

        .item{
            width:100%;
            display: flex;
            justify-content: center;   

            .nav-item{
                display: flex;
                flex-flow: row;
                justify-content: space-around;              
                font-size:38px;
                font-weight: bolder;
                border-radius: 10px;
                background-color: red;
                margin:20px;
                padding:10px;
                .nav-link{
                    color: #FDC000;
                    &:hover,&.active{
                    
                    color: royalblue;
                    
                }
                }

            }
        }    
    }  
    .img{
        img{
        height: 88px;
        width: 88px;
        border:6px solid red;
        margin: 4%;
        border-radius: 50%;
        margin-right: 100px;
        
        &:hover{
            background-color: white;
            
        }
        }
    }
}
@media screen and (max-width:1100px){
    header{
        .nav{
            .item{
                .nav-item{
                font-size: 20px;
                
                }

            }
        }
        .img{
            img{
            height: 48px;
            width: 48px;
            border:6px solid red;
            
            
            }
        }
    }
    
}
</style>