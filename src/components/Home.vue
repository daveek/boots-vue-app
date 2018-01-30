<template>
  <div class="container">
    <img src="../assets/bike-2018.jpg" width="300">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: "",
      gender: 'f',
      options: ['f', 'm'],
      msg: 'Frohes neues jahr 2018!',
      msg2: 'Vue boots jahr development'
    }
  }
}
</script>

<style lang="scss">
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
