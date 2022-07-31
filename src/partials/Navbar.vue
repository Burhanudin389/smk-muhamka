<template>
    <div class="w-full px-4 bg-green-800 hidden lg:flex">
        <div class="w-full max-w-screen-custom mx-auto">
            <div class="w-full flex justify-center md:justify-start space-x-5 text-white py-2 md:py-3">
                <!-- PHONE & EMAIL -->
                <a href="tel:0285381464" class="flex items-center justify-center w-auto md:h-auto hover:text-slate-200">
                    <Icon icon="bi:telephone-fill" />
                    <span class="ml-1 hidden md:inline text-sm">(0285) 381464</span>
                </a>
                <!-- SOCIAL MEDIA -->
                <a href="mailto:smkmuhamka@gmail.com" class="flex items-center justify-center md:bg-transparent w-auto md:h-auto hover:text-slate-200">
                    <Icon icon="fluent:mail-16-filled" class="text-xl" />
                    <span class="ml-1 hidden md:inline text-sm">smkmuhamka@gmail.com</span>
                </a>
            </div>
        </div>
    </div>
    <nav class="w-full px-4 sticky z-30 top-0 left-0 bg-white border border-b transition-all duration-300">
        <div class="w-full max-w-screen-custom mx-auto flex justify-between items-center h-20 md:h-24 transition-all duration-300">
            <router-link to="/">
                <img src="@/assets/logo.png" alt="Logo SMK" class="w-40 lg:w-48" />
            </router-link>
            <!-- SIDEBAR CLOSER -->
            <div v-on:click="closeNavbar()" v-bind:class="{'opacity-0 -z-10 invisible': !showMenu, 'z-10 opacity-100': showMenu}" class="transition-all duration-300 w-full h-screen bg-black bg-opacity-50 fixed inset-0 lg:hidden"></div>
            <ul v-bind:class="{'transform -translate-x-full lg:transform-none': !showMenu, 'translate-x-0': showMenu}" class="fixed z-30 transition-all duration-300 flex lg:items-center flex-col lg:flex-row bg-white w-72 lg:w-auto top-0 left-0 lg:relative h-screen lg:h-auto lg:space-x-4 uppercase font-light text-sm">
                <li v-on:click="closeNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/">Beranda</router-link>
                </li>
                <li v-on:click="closeNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Jurusan</router-link>
                </li>
                <li v-on:click="closeNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Profil</router-link>
                </li>
                <li v-on:click="closeNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Gukar</router-link>
                </li>
                <li v-on:click="closeNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Siswa</router-link>
                </li>
                <li v-on:click="closeNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Artikel</router-link>
                </li>
                <li v-on:click="closeNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Galeri</router-link>
                </li>
                <li v-on:click="closeNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Lowongan</router-link>
                </li>
                <li v-on:click="closeNavbar()">
                    <router-link :class="{ 'text-green-900' : active }" to="/about">Kontak</router-link>
                </li>
                <li class="hidden lg:flex">
                    <!-- MODAL CLOSER -->
                    <div v-on:click="closeSearchModal()" v-bind:class="{'opacity-0 z-30 invisible': !showModal, 'z-40 opacity-100': showModal}" class="transition-all duration-300 w-full h-screen bg-black bg-opacity-50 fixed top-0 left-0 p-4"></div>
                    <!-- MODAL CONTENT -->
                    <div v-bind:class="{'opacity-0 z-40 invisible': !showModal, 'translate-y-5 md:translate-y-10 opacity-100 z-50': showModal}" class="w-full transition-all duration-300 md:max-w-xl fixed top-0 left-1/2 transform -translate-x-1/2 px-4">
                        <div class="w-full bg-white p-4 rounded-md">

                        </div>
                    </div>
                    <button v-on:click="openSearchModal()" class="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg-slate-200 hover:bg-slate-300 hover:shadow-lg focus:bg-slate-400 focus:ring-2 focus:ring-slate-200">
                        <Icon icon="bx:search-alt" class="text-xl" />
                    </button>
                </li>
            </ul>
            <div class="flex space-x-5 items-center lg:hidden">
                <div class="flex lg:hidden">
                    <!-- MODAL CLOSER -->
                    <div v-on:click="closeSearchModal()" v-bind:class="{'opacity-0 z-30 invisible': !showModal, 'z-40 opacity-100': showModal}" class="transition-all duration-300 w-full h-screen bg-black bg-opacity-50 fixed top-0 left-0 p-4"></div>
                    <!-- MODAL CONTENT -->
                    <div v-bind:class="{'opacity-0 z-40 invisible': !showModal, 'translate-y-5 md:translate-y-10 opacity-100 z-50': showModal}" class="w-full transition-all duration-300 md:max-w-xl fixed top-0 left-1/2 transform -translate-x-1/2 px-4">
                        <div class="w-full bg-white p-4 rounded-md">

                        </div>
                    </div>
                    <button v-on:click="openSearchModal()" class="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg-slate-200 hover:bg-slate-300 hover:shadow-lg focus:bg-slate-400 focus:ring-2 focus:ring-slate-200">
                        <Icon icon="bx:search-alt" class="text-xl" />
                    </button>
                </div>
                <button v-on:click="openNavbar()" class="lg:hidden transition-all duration-500 transform hover:scale-125">
                    <Icon icon="codicon:menu" class="text-2xl" />
                </button>
            </div>
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
                    navbar.querySelector('div').classList.replace('md:h-24', 'md:h-20')
                    navbar.querySelector('div').classList.replace('md:h-24', 'md:h-20')
                    navbar.querySelector('div').classList.replace('h-20', 'h-16')
                } else {
                    navbar.classList.remove('shadow-md')
                    navbar.querySelector('div').classList.replace('md:h-20', 'md:h-24')
                    navbar.querySelector('div').classList.replace('md:h-20', 'md:h-24')
                    navbar.querySelector('div').classList.replace('h-16', 'h-20')
                }
            })
        },
        components: {
            Icon
        },
        data() {
            return {
                showMenu: false,
                showModal: false
            }
        },
        methods: {
            openNavbar: function() {
                this.showMenu = true;
            },
            closeNavbar: function() {
                this.showMenu = false;
            },
            toggleModal: function() {
                this.showMenu = false;
            },
            openSearchModal: function() {
                this.showModal = true;
            },
            closeSearchModal: function() {
                this.showModal = false;
            }
        }
    }
</script>