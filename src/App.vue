<template>
  <div id="app">
    <app-header></app-header>
    <!--主体部分-->
    <div class="uk-clearfix uk-position-relative">
      <app-sidebar></app-sidebar>
      <!--<app-content></app-content>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import appHeader from './components/header/header.vue'
  import appSidebar from './components/sidebar/sidebar.vue'
//  import appContent from './components/content/content.vue'

  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components: {appHeader, appSidebar} // appContent
  }
</script>

<style>

</style>
