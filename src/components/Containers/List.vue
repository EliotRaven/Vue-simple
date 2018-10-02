<template>
    <div id="list">
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-33" v-for="item in items" :key="item.id">
                <user v-if="entity == 'users'" :user="item"></user>
                <post v-if="entity == 'posts'" :post="item"></post>
            </div>
        </div>
    </div>
</template>

<script>
import User from '../Cards/User'
import Post from '../Cards/Post'

export default {
  components: {User, Post},
  props: ['items', 'entity']
}
</script>
