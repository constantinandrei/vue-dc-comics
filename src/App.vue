<template>
  <div id="app">
    <TheNavbar/>
    <TheJumbo/>
    <TheContent/>
    <BlueBanner/>
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
import BlueBanner from './components/BlueBanner.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheContent,
    TheFooter,
    BannerSingup,
    TheJumbo,
    BlueBanner
  }
}
</script>

<style lang="scss">

</style>
