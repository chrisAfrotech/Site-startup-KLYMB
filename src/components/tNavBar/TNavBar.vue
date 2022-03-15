<template>
  <div id="navklymb" class ="bg-yellow-500 p-4 flex-row md:flex w-full justify-between items-center">
      <div class ="tNavLogo  w-40 h-15 px-8 items-center">
          <img src="@/assets/logoklymb.png" alt="stew" class="école-full h-full object-cover">
      </div>
      <div class="menu">
        <ul class="md:flex md:items-center text-black md:w-auto w-full pt-4 md:mt-6  md:bg-white duration-700 ease-in" :class="[open ? 'left-0' : 'left[-100%]']">
          <li class="md:mx-4" v-for="link in Links" v-bind:key="link">
            <a :href="link.link" class="text-md hover:text-md p-2 hover:text-yellow-500 outline-none hover:border-yellow-500 ">{{link.name}}</a>
          </li>
        </ul>
      </div>
      <div class="md:items-center px-8 text-white ">
        <button class="btn2 w-16 h-8 text-sm text-white rounded-lg border bg-yellow-500 focus:outline-none focus:ring-2 focus:yellow-700 focus:ring-offset-2">Call</button>
      </div>
  </div> <br>
</template>
<style src="./tNavBar.css">
</style>
<script >
import { ref } from '@vue/reactivity'
export default {
  setup () {
    const open = ref(false)
    const Links = [
      { name: 'Home', link: '#' },
      { name: 'Description', link: '#' },
      { name: 'Services', link: '#' },
      { name: 'Value', link: '#' },
      { name: 'Projects', link: '#' },
      { name: 'Contacts', link: '#' }
    ]
    return { Links, open }
  }
}
</script>

// menu
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
</svg>

// close
// <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
// </svg>
