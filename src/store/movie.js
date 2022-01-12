import _uniqBy from "lodash/uniqBy"
import axios from 'axios'

export default{
    //module
    namespaced:true,
    //data
    state:()=>({
        movies:[],
        message:'영화제목을 검색해 주세요',
        loading:false,
        themovie:{}
    }),
    //computed
    getters:{},
    //methods
    //변이(데이터변경가능)
    mutations:{
        updatestate(state,payload){
            
            Object.keys(payload).forEach((key)=>{              
                state[key]=payload[key]
            })
            
        },
        resetMovies(state){
            state.movie=[]
        }
    },
    //비동기
    actions:{
     
        async SearchMovies({ state,commit },payloader) {
            if(state.loading){
                return
            }
            commit('updatestate',{loading:true})
            try{
                const res=await _fetchmovies({...payloader,page:1})
                const {Search,totalResults}=res.data
                commit('updatestate',{
                    loading:false,
                    message:'',
                    movies:_uniqBy(Search,'imdbID')
                })
                const total=parseInt(totalResults)
                const pageLength=Math.ceil(total/10)
                if(total>10)
                {
                    for(let page=2;pageLength>=page;page++)
                    {
                        if(page>(payloader.number/10))
                            break
                        const res=await _fetchmovies(payloader)
                        const {Search}=res.data
                        commit('updatestate',{
                            movies:[...state.movies,..._uniqBy(Search,'imdbID')]
                    })
    
                    }
                }
                
                
            }
            catch(message)
            {
                commit('updatestate',{movies:[],message})
            }
            finally{
                commit('updatestate',{loading:false})
            }         
        },
        async SearchmoviewithID({state,commit},payload){
            if(state.loading){
                return
            }
            commit('updatestate',{loading:true})
            try{
                const res=await _fetchmovies(payload)
                commit('updatestate',{themovie:res.data})
                console.log(res)
            }
            catch{
                commit('updatestate',{themovie:{}})
    
            }
            finally{
                commit('updatestate',{loading:false})
    
            }
    
        }
        
    },  
}
function _fetchmovies(payload)
{
    const {title,type,number,year,page,id}=payload
    const OMDB_API_KEY='7035c60c'
    const url=id?`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
                :`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
    
    return new Promise((resolve,reject)=>{
        axios.get(url)
        .then(res=>{
            if(res.data.Error)
            {              
                reject(res.data.Error)
                return

            }           
            resolve(res)
        })
        .catch(err=>{
            reject(err.message)
        })
    })

}