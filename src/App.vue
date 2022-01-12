<template>
<div class="container">
  <Header />
  <RouterView />
  <Footer />
</div>
</template>
<script>
import Header from './components/Header'
import Footer from'~/components/Footer'



export default {
  components:{
    Header,
    Footer   

  }
}
</script>
<style lang="scss" scioed>
@import "~/scss/main"


</style>