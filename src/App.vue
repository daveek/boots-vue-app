<template>
  <div id="app">
    <keep-alive>
      <router-view>
        <div is="content-nav"></div>
        <div class="d-flex p-2">
          <!-- <ie-dragger></ie-dragger> -->
        </div>
      </router-view>
    </keep-alive>
    <div class="d-flex flex-column">
    <div class="p-2">
      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  background="#ababab"
                  :interval="4000"
                  img-width="512"
                  img-height="240"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >

        <!-- Text slides with image -->
        <b-carousel-slide caption="First slide"
                          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                          img-src="https://lorempixel.com/1024/480/technics/2/"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/4/">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/8/">
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
              src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
            ut lacus vel interdum.
          </p>
        </b-carousel-slide>

      </b-carousel>
    </div>
    <div class="p-2">
      <p class="mt-4">
        Slide #: {{ slide }}<br>
        Sliding: {{ sliding }}
      </p>
    </div>
  </div>
  </div>
</template>

<script>

import home from 'components/home.vue'
import Draggerit from 'components/Dragger.vue'
import content_nav from 'components/Navigation.vue'

export default {
  name: 'app',
  components: { 
    'ie-dragger': Draggerit,
    'content-nav': content_nav
  },
  data () {
    return {
      title: 'Privacy and Regulation in a Digital World',
      sections: [
          { ruta: 'home',             enlace:'home',                  opened: true },
          { ruta: 'laws-regulation',  enlace:'Laws &amp; Regulations',  opened: false }
      ],
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
