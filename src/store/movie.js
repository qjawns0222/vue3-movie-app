import _uniqBy from "lodash/uniqBy"
import axios from 'axios'

const defaultmessage='영화제목을 검색해주세요';

export default{
    //module
    namespaced:true,
    //data
    state:()=>({
        movies:[],
        message:defaultmessage,
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
            state.movies=[]
            state.message=defaultmessage
            state.loading=false
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
            catch(error)
            {
                
                commit('updatestate',{
                    movies:[],
                    message:error.message
                })
               
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
async function _fetchmovies(payload){
    
    const res=await axios.post('/.netlify/functions/movie',payload)   
    console.log(res)
    return res   
}