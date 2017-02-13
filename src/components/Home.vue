<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <div class="col-md-6 col-md-offset-3">
      <ul class="list-group">
        <li class="list-group-item" v-for="footballer in footballers">
          {{footballer.name}}
          <strong v-if="footballer.nickname">({{footballer.nickname}})</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  created: function () {
    this.getFootballers()
  },
  data () {
    return {
      footballers: [],
      msg: 'Welcome'
    }
  },
  props: ['baseUrl'],
  methods: {
    getFootballers: function () {
      this.$http.get(this.$root.baseUrl + 'footballer')
            .then(data => {
              this.footballers = data.body._embedded.footballers
            })
    }
  }
}
</script>

<style scoped>

</style>
