<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
@import './scss/main.scss'
</style>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
