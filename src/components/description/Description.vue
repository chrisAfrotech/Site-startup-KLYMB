<template>
<section id="desklymb" class="mb-24">
    <h1 class="pt-8 font-bold mt-20 text-yellow-500"><span class="text-2xl rounded-full">.</span>About Us</h1>
    <div class="m-4 grid md:grid-cols-2 justify-center gap-10 ">
         <div id="images" class="max-w-full justify-center md:px-8 xl:h-full xl:w-full pt-8 hidden md:block ">
          <img src="" alt="stew" class="wl'école-full h-full object-cover">
        </div>
        <div id="description" class="md:mt-20 mt-4 px-16 md:text-left sm:text-center">
            <div id="welcome" class="text-black flex justify-center font-bold mb-8">
              <h1 ><span class="text-xl lg:text-4xl md:text-2xl text-blue-700">3 YEARS EXPERIENCES</span></h1>
            </div>
            <div id="app" class="container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna
                    fringilla urna. Etiam tempor orci eu lobortis. Integer quis auctor elit sed vulputate mi sit.<span v-if="readMore"></span>
                    <span v-else>...</span>
                </p>

                <p class="" v-show="readMore">Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Turpis egestas pretium aenean pharetra magna ac
                    placerat. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Sed cras ornare arcu dui. Aliquam vestibulum
                    morbi blandit cursus.
                </p>
                <button class="btn text-blue-700 hover:text-yellow-500  text-sm font-bold mt-8 py-4 transition easy-out duration-300" @click="readMore =! readMore">
                    <span v-if="readMore">Read Less..</span>
                    <span v-else>Read More..</span>
                </button>
            </div>
        </div>
    </div>
</section>
</template>
<style src="./description.css">
</style>
<script src="./description.js" >
</script>
