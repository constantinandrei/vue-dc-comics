<template>
  <div id="app">
    <TheNavbar/>
    <TheContent/>
    <TheFooter/>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import TheContent from './components/TheContent.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheContent,
    TheFooter
  }
}
</script>

<style lang="scss">

</style>
