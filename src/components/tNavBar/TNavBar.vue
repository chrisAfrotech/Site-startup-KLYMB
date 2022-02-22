<template>
    <div class ="tNavBar md:flex bg-blue-900">
        <div class ="tNavLogo w-79 h-37 py-3.5 px-8 md:flex justify-between items-center">
            <img src="@/assets/logoklymb.png" alt="stew" class="wl école-full h-full object-cover">
        </div>

        <ul class="md:flex md:items-center text-white md:static absolute md:w-auto w-full top-14 duration-700 ease-in" :class="[open ? 'left-0' : 'left[-100%]']">
            <li class="md:mx-4" v-for="link in Links" v-bind:key="link">
                <a :href="link.link" class="text-xl hover:text-xl hover:text-yellow-500">{{link.name}}</a>
            </li>
        </ul>
        <div class="md:flex text-white py-8 px-16">
            <div class="pl-8 px-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>Klymb22@gmail.com
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
// function Menu(e){
//     let list = document.querySelector('ui');

//     e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]'),list.classList.add('opacity-100')) :( e.name = "menu" , list.classList.remove('top-[80px]').list.classList.remove('opacity-100'))
// }
</script>

 <!-- <ul class="md:flex md:items-center md-px-0 px-6 md:pb-0 pb-10 md:static z-[-1] md:z-auto md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
            <li class="md:mx-4 md:my-0 my-6">
                <a href="#" class="text-xl text-white hover:text-yellow-500">Home</a>
            </li>
            <li class="md:mx-4 md:my-0 my-6">
                <a href="#" class="text-xl text-white hover:text-yellow-500">Description</a>
            </li>
            <li class="md:mx-4 md:my-0 my-6">
                <a href="#" class="text-xl text-white hover:text-yellow-500">Services</a>
            </li>
            <li class="md:mx-4 md:my-0 my-6">
                <a href="#" class="text-xl text-white hover:text-yellow-500">Value</a>
            </li>
            <li class="md:mx-4 md:my-0 my-6">
                <a href="#" class="text-xl text-white hover:text-yellow-500">Projects</a>
            </li>
            <li class="md:mx-4 md:my-0 my-6">
                <a href="#" class="text-xl text-white hover:text-yellow-500">Custommers</a>
            </li>
        </ul> -->

// menu
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
</svg>

// close
// <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
// </svg>
