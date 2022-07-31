<template>
    <div class="w-full px-4 bg-green-800">
        <div class="w-full max-w-screen-custom mx-auto">
            <div class="w-full flex justify-center md:justify-start space-x-5 text-white py-2 md:py-3">
                <!-- PHONE & EMAIL -->
                <a href="tel:0285381464" class="flex items-center justify-center bg-green-900 w-9 h-9 md:bg-transparent rounded-full md:w-auto md:h-auto hover:text-slate-200">
                    <Icon icon="bi:telephone-fill" />
                    <span class="ml-1 hidden md:inline text-sm">(0285) 381464</span>
                </a>
                <!-- SOCIAL MEDIA -->
                <a href="mailto:smkmuhamka@gmail.com" class="flex items-center justify-center bg-green-900 w-9 h-9 md:bg-transparent rounded-full md:w-auto md:h-auto hover:text-slate-200">
                    <Icon icon="fluent:mail-16-filled" class="text-xl" />
                    <span class="ml-1 hidden md:inline text-sm">smkmuhamka@gmail.com</span>
                </a>
            </div>
        </div>
    </div>
    <nav class="w-full px-4 sticky top-0 left-0 bg-white border border-b transition-all duration-300">
        <div class="w-full max-w-screen-custom mx-auto flex justify-between items-center h-24 transition-all duration-300">
            <router-link to="/">
                <img src="@/assets/logo.png" alt="Logo SMK" class="w-40 lg:w-48" />
            </router-link>
            <!-- SIDEBAR CLOSER -->
            <div v-on:click="toggleNavbar()" v-bind:class="{'opacity-0 -z-10': !showMenu, 'z-20 opacity-100': showMenu}" class="transition-all duration-300 w-full h-screen bg-slate-900 bg-opacity-50 fixed inset-0 lg:hidden"></div>
            <ul v-bind:class="{'transform -translate-x-full lg:transform-none': !showMenu, 'translate-x-0': showMenu}" class="fixed z-30 transition-all duration-300 flex lg:items-center flex-col lg:flex-row bg-white w-72 lg:w-auto top-0 left-0 lg:relative h-screen lg:h-auto lg:space-x-4 uppercase font-light text-sm">
                <li v-on:click="toggleNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/">Beranda</router-link>
                </li>
                <li v-on:click="toggleNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Prodi</router-link>
                </li>
                <li v-on:click="toggleNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Profil</router-link>
                </li>
                <li v-on:click="toggleNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Gukar</router-link>
                </li>
                <li v-on:click="toggleNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Siswa</router-link>
                </li>
                <li v-on:click="toggleNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Artikel</router-link>
                </li>
                <li v-on:click="toggleNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Galeri</router-link>
                </li>
                <li v-on:click="toggleNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Lowongan</router-link>
                </li>
                <li v-on:click="toggleNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Kontak</router-link>
                </li>
                <li>
                    <button class="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg-slate-200 hover:bg-slate-300 hover:shadow-lg focus:bg-slate-400 focus:ring-2 focus:ring-slate-200">
                        <Icon icon="bx:search-alt" class="text-xl" />
                    </button>
                </li>
            </ul>
            <button v-on:click="toggleNavbar()" class="lg:hidden">
                <Icon icon="codicon:menu" class="text-2xl" />
            </button>
        </div>
    </nav>
</template>

<script>
    import { Icon } from '@iconify/vue';

    export default {
        name: 'Navbar',
        mounted() {
            const navbar = document.querySelector('nav')

            window.addEventListener('scroll', function() {
                const scrollPos = this.pageYOffset

                if( scrollPos > navbar.clientHeight ) {
                    navbar.classList.add('shadow-md')
                    navbar.querySelector('div').classList.replace('h-24', 'h-20')
                } else {
                    navbar.classList.remove('shadow-md')
                    navbar.querySelector('div').classList.replace('h-20', 'h-24')
                }
            })
        },
        components: {
            Icon
        },
        data() {
            return {
                showMenu: false,
                openModal: false
            }
        },
        methods: {
            toggleNavbar: function(){
                this.showMenu = !this.showMenu;
            },
            toggleModal: function(){
                this.showMenu = false;
            },
        }
    }
</script>