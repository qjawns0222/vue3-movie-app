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
                    active-class="active"
                    class="nav-link">
                        {{nav.name}}
                    </RouterLink>
                </div>
            </div>
        </div>
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
                    href:'/movie/tt4520988'
                },
                {
                    name:'About',
                    href:'/about'
                }
            ]
        }
    },
   
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
}
</style>