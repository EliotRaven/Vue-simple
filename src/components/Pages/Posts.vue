<template>
    <div id="posts">
        <div class="spin-container">
            <md-progress-spinner v-if="spinner" class="md-accent" :md-stroke="8" md-mode="indeterminate"></md-progress-spinner>
        </div>
        <list v-if="!spinner" :items="posts" :entity="entity"></list>
    </div>
</template>

<script>
import { resource } from '../../controllers/resource'
import List from '../Containers/List'

export default {
  components: { List },
  data () {
    return {
      posts: [],
      entity: 'posts',
      authors: [],
      spinner: true
    }
  },
  methods: {
    fetchPosts () {
      resource.index(this.entity).then(data => {
        this.posts = data

        if (this.posts.length && this.authors.length) {
          this.posts.map(post => {
            post.author = this.authors.find(author => {
              return author.id === post.userId
            })
          })
          this.spinner = false
        }
      })
    },
    fetchAuthors () {
      resource.index('users').then(data => {
        this.authors = data
      })
    }
  },
  mounted () {
    this.fetchAuthors()
    this.fetchPosts()
  }
}
</script>

<style>
    #posts {
        min-height: calc(100vh - 50px);
        position: relative;
    }
    #posts .spin-container {
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
