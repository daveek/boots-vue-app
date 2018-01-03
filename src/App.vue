<template>
  <div id="app">
    <img src="./assets/bike-2018.jpg" width="300">
    <h1>{{ msg }}</h1>
    <h3>{{ msg2 }}</h3>
    <div class="d-inline-flex p-3">
      <p></p>
        <input type="text" v-model="name" placeholder="Bitte, Schreibe deinen namen" class="form-control">
        <b-form-group label="Gender">
          <b-form-radio-group id="radios1" v-model="gender" :options="options" size="sm" name="radioOpenions">
          </b-form-radio-group>
        </b-form-group>
    </div>
    <b-jumbotron header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2" >
      <h1 v-if="name">
          {{ gender == 'm' ? 'Hallo, Willkomen Herr' : 'Hallo, Willkomen Frau' }} {{ name }}
      </h1>
      <p>For more information visit website</p>
      <b-btn variant="primary" href="#">More Info</b-btn>
    </b-jumbotron>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <br><br>
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
import draggable from 'vuedraggable'
export default {
  name: 'app',
  components: { draggable },
  props: ['instructions', 'sortableElements', 'panels', 'panels_name'],
  data () {
    return {
      name: "",
      gender: 'f',
      options: ['f', 'm'],
      msg: 'Frohes neues jahr 2018!',
      msg2: 'Vue boots jahr development',
      slide: 0,
      sliding: null,
      dragItemsOptions: {
          group: 'sortableElements',
          animation: 150,
          ghostClass: 'ghost-sortable-item', 
          dragClass: 'dragging-sortable-item',
          filter: ".ignore-elements"
      },
      panelsOptions: [],
      mutableSortableElements: this.sortableElements,
      mutablePanels: this.panels
    }
  },
  mounted: function () {
      var clonedOptionsObj;
      for(var i = 0; i < this.panels.length; i++){
          clonedOptionsObj = _.clone(this.dragItemsOptions);
          this.panelsOptions.push(clonedOptionsObj);
      }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    dropElementInPanel: function(e){
        if(this.mutablePanels[e.to.id][0].panel == (+e.to.id + 1)/* && this.mutablePanels[e.to.id].length == 1*/){
            this.mutablePanels[e.to.id][0].sorted = true;
            this.panelsOptions[e.to.id].disabled = true;
        }
        else{
            var elementRemoved = this.panels[e.to.id].shift();
            this.mutableSortableElements.push(elementRemoved)
        }
    },
    sortedItem: function(id){
        return this.mutablePanels[id][0].sorted;
    },
    cloneOptions: function(i){
        /*console.log('ENTRA EN CLONAR ' + i)
        var clonedOptionsObj = _.clone(this.dragItemsOptions);
        this.panelsOptions[i] = clonedOptionsObj;
        /*this.panelsOptions.push(clonedOptionsObj);*/
        //return clonedOptionsObj;
        
        //console.log(this.panelsOptions[i])
        return this.panelsOptions[i];
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
.panel-usorted-elements{
    margin-top: 90px;
}
.draggable-component{
    min-height: 40px;
    display: block; 
}
.dragable-li{
    background-color: #fff;
    padding: 8px;
    margin: 12px 0px;
    cursor: move;
    border: 1px solid #ccc;
}
.panel-body .dragable-li{
    margin: 0px;
}
.ghost-sortable-item{
    opacity: 0.75;
    border: 2px dashed #ccc;
}
.dragging-sortable-item{
    color: #fff;
    background-color: rgb(0,51,141);
    opacity: 1;
    border: 1px solid #ccc;
}
.ignore-elements{
    cursor: no-drop;
    background-color: #e9eedc;
}

</style>
