<template>
    <div class="container">
        <input type="text" v-model="title" placeholder="Search for Movies, Series & More" class="content" @keydown.enter="apply">
        <div class="selects">
            <select v-for="filter in filters" :key="filter.name" :name="type"  v-model="$data[filter.name]" class="select">
                <option v-if="filter.name==='year'"  value="">All Year</option>
                <option v-for="item in filter.items" :key="item">{{item}}</option>
            </select>
        </div>
        <button class="apply" @click="apply">Apply</button>
    </div>
</template>
<script>

export default {
    data() {
        return {
            title:'',
            type:'movie',
            number:'10',
            year:'',
            filters:[
                {
                    name:'type',
                    items:['movie','series','episode']
                },
                {
                    name:'number',
                    items:[10,20,30]
                },
                {
                    
                    name:'year',
                    items:(()=>{ 
                        const thisYear=new Date().getFullYear() //현재 년도
                        const year=[]
                        for(let i=thisYear;i>=1985;i-=1){
                            
                            year.push(i)
                        }
                        return year
                    })()
                }
            ]
        }
        
    },
    methods:{
        async apply(){
            
            this.$store.dispatch('movie/SearchMovies',{
                title:this.title,
                type:this.type,
                number:this.number,
                year:this.year
            })
            

        }
    }
}
</script>
<style lang="scss" scoped>
>*{
    margin: 0;
    padding: 0;
}
.container{
    display: flex;
    width:95%;
    margin: auto;
    
    .content{
        width: 50%;
        font-size: 50px;
    }
    .selects{
        display:flex;
        width: 40%;
        .select{
        width: 100%;
        margin: 0% 2%;
        font-size: 50px;
    }
    }
    .apply{
        font-size: 50px;
        background-color: blue;
        font-weight: bolder;
        border-radius: 10px;
        padding: 0.4%;
        color: red;
        cursor: pointer;
    }  
}
@media screen and (max-width:1100px){
    .container{
    display: flex;
    flex-flow: column;
   
    .content{
        
        width: 95%;
        margin: auto;
        font-size: 20px;
    }
    .selects{
        
        width: 100%;
        .select{
        width: 100%;
        margin: 2%;
        font-size: 20px;
        text-align: center;
    }
    }
    .apply{
        font-size: 20px;
        background-color: blue;
        margin: auto;
        width: 95%;
    }  
}

}
</style>