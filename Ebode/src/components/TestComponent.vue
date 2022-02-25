<template>
  <button class="hello">
    <h1>{{ count }}</h1>
  </button>
</template>

<script>
export default {
  name: 'TestComponent',
  props: {
    msg: String
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  beforeMount () {
    /* alert('an new instance was created')
    console.log('lalalalalalal' + this.$data) */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  padding: 10px;
  border: none;
  background-color: lightblue;
}
</style>
