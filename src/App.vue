<template>
  <div id="app-main">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Vue example</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>face</md-icon>
            <span @click="show('/users')" class="md-list-item-text links">Users</span>
          </md-list-item>

          <md-list-item>
            <md-icon>library_books</md-icon>
            <span @click="show('/posts')" class="md-list-item-text links">Posts</span>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      menuVisible: false
    }
  },
  methods: {
    show (param) {
      this.menuVisible = !this.menuVisible
      this.$router.push(param)
    }
  }
}
</script>

<style>
#app-main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.md-app {
  border: 1px solid rgba(#000, .12);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
  background: #efefef;
}
.links {
  cursor: pointer;
}

</style>
