<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style src='./css/main.css'>
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
