<template>
  <div id="app">
    <TheNavbar/>
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

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheContent,
    TheFooter,
    BannerSingup
  }
}
</script>

<style lang="scss">

</style>
