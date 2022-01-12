<template>
<div class="container">
    <div class="logo">
        <Logo/>
    </div>
    <div class="link">
    <a href="https://github.com/qjawns0222" target="_blank">(c){{new Date().getFullYear()}} BoemJun</a>
    </div>
</div>
</template>
    

<script>
import Logo from'./Logo'
export default {
    components:{
        Logo
    }
}
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        
        font-size: 78px;
        .logo{
            font-size: 78px;
            text-decoration-line: none;
        }
        .link>a{
            text-decoration: none;
            color: black;
        }
    }

</style>