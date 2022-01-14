import { createRouter,createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import Notfound from './Notfound'
export default createRouter({
    //Hash,
    //https://google.com/#/search
    history:createWebHashHistory(),
    scrollBehavior(){
        return {top:0}
    },
    //pages
    routes:[
        {
            //기본 주소에 path같을 붙이면 component파일로 이동
            path:'/',
            component:Home
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/movie/:id',
            component:Movie
        },
        {
            path:'/:notfound(.*)',
            component:Notfound
        }

    ]
})