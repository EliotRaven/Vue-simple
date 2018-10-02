<template>
    <div id="users">
        <div class="spin-container">
            <md-progress-spinner v-if="spinner" class="md-accent" :md-stroke="8" md-mode="indeterminate"></md-progress-spinner>
        </div>
        <list :items="users" :entity="entity"></list>
    </div>
</template>

<script>
import { resource } from '../../controllers/resource'
import List from '../Containers/List'

export default {
  components: { List },
  data () {
    return {
      users: [],
      entity: 'users',
      spinner: true
    }
  },
  methods: {
    fetchUsers () {
      resource.index(this.entity).then(data => {
        this.users = data
        this.spinner = false
      })
    }
  },
  mounted () {
    this.fetchUsers()
  }
}
</script>

<style>
    #users {
        min-height: calc(100vh - 50px);
        position: relative;
    }
    #users .spin-container {
        position: absolute;
        top: 10%;
        bottom: 0;
        margin: 0 auto;
        left: 0;
        right: 0;
        width: 60px;
        height: 60px;
        display: block;
        z-index: 999;
    }
</style>
