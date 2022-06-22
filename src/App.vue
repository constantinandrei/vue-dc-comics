<template>
  <div id="app">
    <TheNavbar/>
    <TheJumbo/>
    <TheContent/>
    <TheFooter/>
    <BannerSingup/>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import TheContent from './components/TheContent.vue'
import TheFooter from './components/TheFooter.vue'
import BannerSingup from './components/BannerSingup.vue'
import TheJumbo from './components/TheJumbo.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheContent,
    TheFooter,
    BannerSingup,
    TheJumbo
  }
}
</script>

<style lang="scss">

</style>
