<template>
<MenuBar />
  <div class="home">
    <MainPage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/components/MainPage.vue'
import MenuBar from '@/components/MenuBar.vue'

export default {
  name: 'Home',
  components: {
    MenuBar,
    MainPage
  }
}
</script>
