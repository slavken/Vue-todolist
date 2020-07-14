<template>
  <div id="app">
    <Navbar />
    <div id="main" class="container text-center my-5">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';

#main {
  min-height: calc(100vh - 207.7px);
}
</style>
