<template>
<section id="footer" class="bg-blue-900 ">
    <div class="m-4 grid md:grid-cols-4 justify-center gap-10 py-8 px-8 sm-8">
        <div class="aboutKlymb text-white">
            <div class="logoKlymb flex justify-center py-2 px-12 pt-8"><img src="@/assets/logoklymb2.png" alt="stew" class="wl école-full h-full object-cover"></div>
            <div class="description  py-2">
                Klymb est une startup camerounaise basé a yaoundé offrant des services de qualitée dans les domaines du Developpement Web, Developpement Android, Ui/Ux Design, Graphic Design, et des Formations...
            </div>
        </div>
        <div class="QuickAcces">
            <h1 class="pt-8 pb-4 text-yellow-500 font-bold text-xl">Quick Access</h1>
             <ul class="md:items-center text-white md:w-auto w-full">
                <li class="md:mx-4  my-4">
                    <a href="#acceuil" class="text-md py-1  hover:text-xl hover:text-yellow-500 border-b-2 border-dashed">Home</a>
                </li>
                 <li class="md:mx-4  my-4">
                    <a href="#desklymb" class="text-md  py-1 hover:text-xl hover:text-yellow-500 border-b-2 border-dashed">Description</a>
                </li>
                 <li class="md:mx-4  my-4">
                    <a href="#services" class="text-md  py-1 hover:text-xl hover:text-yellow-500 border-b-2 border-dashed">Services</a>
                </li>
                 <li class="md:mx-4  my-4">
                    <a href="#value" class="text-md  py-1 hover:text-xl hover:text-yellow-500 border-b-2 border-dashed">Value</a>
                </li>
                 <!-- <li class="md:mx-4  my-4">
                    <a href="#" class="text-md  py-1 hover:text-xl hover:text-yellow-500 border-b-2 border-dashed">Projects</a>
                </li> -->
                 <li class="md:mx-4  my-4">
                    <a href="#reqcontact" class="text-md  py-1 hover:text-xl hover:text-yellow-500 border-b-2 border-dashed">Contacts</a>
                </li>
            </ul>
        </div>
        <div class="Contacts text-white">
            <h1 class="pt-8 pb-4 text-yellow-500 font-bold text-xl ">Contact</h1>
            <ul class="md:items-center text-white md:w-auto w-full">
                <li class="md:mx-4 my-4">
                    <span class=" text-yellow-500">Email </span> Klymb22@gmail.com <br>
                </li>
                <li class="md:mx-4 my-4">
                    <span class=" text-yellow-500">Tel </span>  (+237) 677101888 / 656579291
                </li>
                <li class="md:mx-4 my-4">
                    <a href="#" class="text-md  hover:text-xl text-yellow-500 ">Facebook</a> https/Facebook/klymb
                </li>
                <li class="md:mx-4 my-4">
                    <a href="#" class="text-md  hover:text-xl text-yellow-500 ">Youtube</a> https/youtube/klymb.cm
                </li>
                <li class="md:mx-4 my-4">
                    <a href="#" class="text-md  hover:text-xl text-yellow-500 ">Twitter</a> @Klymb22
                </li>
            </ul>
        </div>
        <div id="reqcontact" class="SendMessages justify-center">
            <h1 class="pt-8 pb-4 text-yellow-500 font-bold text-xl ">Send Message</h1>
            <div class="email py-2"><span class="text-white "> E-mail </span><span class="text-red-500"> *</span> <br> <textarea class="focus:outline-none focus:ring-2 focus:yellow-700 focus:ring-offset-2 rounded-md h-8 text-md py-1 px-2" v-model="publiTitle" placeholder="Enter email address"></textarea> </div>
            <div class=" message"><span class="text-white justify-items-start"> Request </span><span class="text-red-500"> *</span> <br> <textarea class="focus:outline-none focus:ring-2 focus:yellow-700 focus:ring-offset-2 rounded-md h-16 text-md py-1 px-2" v-model="publiContent" placeholder="Enter your request"></textarea></div>
             <button class="px-8 py-2 mt-2 text-sm text-white font-semibold rounded-lg border bg-blue-500 hover:bg-yellow-500 hover:shadow-lg shadow-yellow-3 hover:border-transparent focus:outline-none transition easy-out duration-300">Send</button>
        </div>
    </div>
    <div class="copyright justify-center text-sm text-white py-4 border-t border-inherit ">
        Klymb. Copyright 2022. All right reserved.
    </div>
</section>
</template>
<style src="./footer.css">
</style>
<script src="./footer.js">
</script>
