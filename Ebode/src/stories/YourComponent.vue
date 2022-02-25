<template>
  <button class="hello">
    {{msg}}
    Mon composant
  </button>
</template>

<script>
export default {
  name: 'YourComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  padding: 20px;
  border: solid red 10px;
  background-image:linear-gradient(to right, pink,purple);
  border-radius: 20em;
  color: white;
  font-weight: bold;
  font-family:'Arial';
  font-size: 18px;
}
</style>
