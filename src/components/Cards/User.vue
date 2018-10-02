<template>
  <div id="user">
    <md-card>
      <md-card-media>
        <img src='https://picsum.photos/200/300/?random' alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{user.name}}</div>
        <div class="md-subhead">from {{user.company.name}}</div>
      </md-card-header>

      <md-card-actions>
        <md-button :href="'http://' + user.website" target="_blank" class="md-accent">Site</md-button>
        <md-button :href='"tel:"+ user.phone'>Phone</md-button>
      </md-card-actions>

      <md-card-content>
        Hi, my name is {{user.username}}. I work in {{user.company.name}}.
        Our company has cache phrase "{{user.company.catchPhrase}}"
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  props: ['user'],
  data () {
    return {

    }
  }
}
</script>

<style>
    #user {
        margin-top: 20px;
    }
    #user .md-card-media img {
        display: block;
    }
</style>
