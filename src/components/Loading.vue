<template>

<div :class="{ absolute,fixed }" style="width=`${size}rem',height=`${size}rem',zIndex" class="loader"></div>
</template>

<script>
export default {
    props: {
        size:{
            type:Number,
            default:2
        },
        fixed:{
            type: Boolean,
            default: false
        },
        absolute:{
            type: Boolean,
            default: false
        },
        zIndex:{
            type:Number,
            default:0
        }
        
    },
}
</script>
<style lang="scss" scoped>
$size: 200px !default;
$thickness: 6px !default;
$base-color: #fff !default;
$wheel-color: #c30 !default;
$speed: 800ms !default;


// styles
body {
    background-color: #d5d5d5;
}

.loader {

	height: $size;
	width: $size; 
    border: $thickness solid $base-color;
	border: {
    right-color: $wheel-color;
    top-color: $wheel-color;
    radius: 100%;
    }
    animation: spin $speed infinite linear;
    &.absolute{
        position:absolute;
    }
    &.fixed{
        position:absolute;
    }
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(359deg); }
}
@media screen and (max-width:1100px){
.loader {
    $small:100px;

	height: $small;
	width: $small;  
}
}
</style>