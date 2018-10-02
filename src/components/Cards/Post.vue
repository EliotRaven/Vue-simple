<template>
    <div id="post">
        <md-card class="md-card-example">
            <md-card-area md-inset>
                <md-card-media md-ratio="16:9">
                    <img src="https://picsum.photos/200/300/?random" alt="Coffee House">
                </md-card-media>

                <md-card-header>
                    <h2 class="md-title">{{post.title}}</h2>
                    <div class="md-subhead">
                        <md-icon>location_on</md-icon>
                        <span>{{post.author.name || 'need author'}}</span>
                    </div>
                </md-card-header>

                <md-card-content>
                    {{post.body}}
                </md-card-content>
            </md-card-area>
        </md-card>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>
