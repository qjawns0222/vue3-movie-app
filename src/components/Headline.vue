<template>
    <div class="box">
    <span class="name">OMDb API</span>
    <span class="subname">The Open Movie Database<br></span>
    <span class="content">
    The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.<br>
    If you find this service useful, please consider making a one-time donation or become a patron.</span>
    </div>
</template>
<style lang="scss" scoped>
.box{
    display: flex;
    flex-flow: column;
    width: 95%;
    margin: 50px auto;
    .name{
    color:#FDC000;
    font-size: 80px;
}
.subname{
    color: blue;
    font-size: 50px;
}
.content{
    font-size: 40px;
}
}
@media screen and (max-width:1100px){
    .box{
        align-items: center;
        margin: 10px;
        .name{
            font-size: 50px;
            
        }
        .subname{
            color: blue;
            font-size: 40px;
            margin: none;
            
        }
        .content{
            font-size: 20px;
            margin: 2%;
        }
    }
}

</style>