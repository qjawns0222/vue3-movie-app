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
            font-size:38px;
            font-weight: bolder;
            margin: 20px;
            span{
                color: whitesmoke;
            }
            &:hover{
                color:red;
            }
        }

</style>