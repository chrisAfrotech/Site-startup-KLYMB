<template>
  <router-view/>
</template>
<script>

export default {
  name: 'App',
  data () {
    return {
      greeting: 0,
      todos: ['arnaud', 'eric', 'TAMO']
    }
  },
  mounted () {
    setInterval(() => {
      this.greeting += 1
    }, 1000)
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    caMarche () {
      alert('ça a marché')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
