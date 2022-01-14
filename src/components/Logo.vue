<template>
    <RouterLink to="/" class="logo">
    Movie<span>.com</span>
    </RouterLink>
</template>

<style lang="scss" scoped>

.logo{
            color: #FDC000;
            display: flex;
            justify-content: flex-start;
            font-size:48px;
            font-weight: bolder;
            margin: 20px;
            span{
                color: whitesmoke;
            }
            &:hover{
                color:red;
            }
        }
@media screen and (max-width:1100px){
    .logo{
            font-size: 28px;
        
        }
}
</style>