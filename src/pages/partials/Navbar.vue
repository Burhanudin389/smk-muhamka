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
            <div class="flex items-center">
                <button v-on:click="openNavbar()" class="mr-3 lg:hidden transition-all duration-500 transform hover:scale-125">
                    <Icon icon="codicon:menu" class="text-2xl" />
                </button>
                <router-link to="/">
                    <img src="@/assets/logo.png" alt="Logo SMK" class="w-36 lg:w-48" />
                </router-link>
            </div>
            <!-- SIDEBAR CLOSER -->
            <div v-on:click="closeNavbar()" v-bind:class="{'opacity-0 -z-10 invisible': !showMenu, 'z-10 opacity-100': showMenu}" class="transition-all duration-300 w-full h-screen bg-black bg-opacity-50 fixed inset-0 lg:hidden"></div>
            <ul id="sidebar-menu" v-bind:class="{'transform -translate-x-full lg:transform-none': !showMenu, 'translate-x-0': showMenu}" class="fixed z-30 transition-all duration-300 flex lg:items-center flex-col lg:flex-row bg-white w-72 md:w-80 overflow-y-auto lg:overflow-hidden lg:w-auto top-0 left-0 lg:relative h-screen lg:h-auto lg:space-x-4 lg:uppercase font-light lg:text-sm p-3 space-y-1 lg:space-y-0">
                <div class="w-full flex items-center justify-between pb-4 mt-2">
                    <li class="lg:hidden">
                        <img src="@/assets/logo.png" alt="Logo SMK" class="w-36 lg:w-48" />
                    </li>
                    <button v-on:click="closeNavbar()" class="w-10 h-10 flex lg:hidden items-center justify-center rounded-full transition-all duration-300 bg-slate-200 hover:bg-slate-300 hover:shadow-lg focus:bg-slate-400 focus:ring-2 focus:ring-slate-200">
                        <Icon icon="ep:close" class="text-xl" />
                    </button>
                </div>
                <!--  -->
                <div class="w-full rounded-md bg-slate-100 p-3 text-sm lg:hidden">
                    <p class="text-center py-3 font-medium">Kunjungi juga</p>
                    <div class="w-full mt-3">
                        <router-link to="/" class="w-full flex justify-center py-2 rounded-md transition-all duration-300 bg-green-800 hover:bg-green-900 focus:ring-2 focus:ring-green-500 text-white">
                            <span>I-Smart</span>
                        </router-link>
                    </div>
                    <!-- <hr class="my-3"/> -->
                    <div class="w-full mt-3">
                        <router-link to="/" class="w-full flex justify-center py-2 rounded-md transition-all duration-300 bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 text-white">
                            <span>E-Lib Muhamka</span>
                        </router-link>
                    </div>
                </div>
                <li class="lg:hidden pt-5 pb-3 font-medium">
                    <h3>Menu utama</h3>
                </li>
                <!--  -->
                <li id="menu-item" v-on:click="closeNavbar()" class="p-2 lg:p-0 hover:bg-green-100 lg:hover:bg-transparent rounded-md">
                    <router-link :class="{ 'text-green-900' : active }" to="/" class="flex items-center">
                        <Icon icon="flat-color-icons:home" class="text-xl mr-2 lg:hidden" />
                        <span class="text-sm">Beranda</span>
                    </router-link>
                </li>
                <li id="menu-item" v-on:click="closeNavbar()" class="p-2 lg:p-0 hover:bg-green-100 lg:hover:bg-transparent rounded-md">
                    <router-link :class="{ 'text-green-900' : active }" to="/about" class="flex items-start">
                        <Icon icon="fxemoji:diamondshapewithdotinside" class="text-xl mr-2 lg:hidden" />
                        <span class="text-sm">Jurusan</span>
                    </router-link>
                </li>
                <li id="menu-item" v-on:click="closeNavbar()" class="p-2 lg:p-0 hover:bg-green-100 lg:hover:bg-transparent rounded-md">
                    <router-link :class="{ 'text-green-900' : active }" to="/about" class="flex items-start">
                        <Icon icon="flat-color-icons:about" class="text-xl mr-2 lg:hidden" />
                        <span class="text-sm">Profil</span>
                    </router-link>
                </li>
                <li id="menu-item" v-on:click="closeNavbar()" class="p-2 lg:p-0 hover:bg-green-100 lg:hover:bg-transparent rounded-md">
                    <router-link :class="{ 'text-green-900' : active }" to="/about" class="flex items-start">
                        <Icon icon="noto:woman-teacher-light-skin-tone" class="text-xl mr-2 lg:hidden" />
                        <span class="text-sm">Gukar</span>
                    </router-link>
                </li>
                <li id="menu-item" v-on:click="closeNavbar()" class="p-2 lg:p-0 hover:bg-green-100 lg:hover:bg-transparent rounded-md">
                    <router-link :class="{ 'text-green-900' : active }" to="/about" class="flex items-start">
                        <Icon icon="noto:student-light-skin-tone" class="text-xl mr-2 lg:hidden" />
                        <span class="text-sm">Siswa</span>
                    </router-link>
                </li>
                <li id="menu-item" v-on:click="closeNavbar()" class="p-2 lg:p-0 hover:bg-green-100 lg:hover:bg-transparent rounded-md">
                    <router-link :class="{ 'text-green-900' : active }" to="/about" class="flex items-start">
                        <Icon icon="flat-color-icons:news" class="text-xl mr-2 lg:hidden" />
                        <span class="text-sm">Berita</span>
                    </router-link>
                </li>
                <li id="menu-item" v-on:click="closeNavbar()" class="p-2 lg:p-0 hover:bg-green-100 lg:hover:bg-transparent rounded-md">
                    <router-link :class="{ 'text-green-900' : active }" to="/about" class="flex items-start">
                        <Icon icon="flat-color-icons:gallery" class="text-xl mr-2 lg:hidden" />
                        <span class="text-sm">Galeri</span>
                    </router-link>
                </li>
                <li id="menu-item" v-on:click="closeNavbar()" class="p-2 lg:p-0 hover:bg-green-100 lg:hover:bg-transparent rounded-md">
                    <router-link :class="{ 'text-green-900' : active }" to="/about" class="flex items-start">
                        <Icon icon="flat-color-icons:business-contact" class="text-xl mr-2 lg:hidden" />
                        <span class="text-sm">Kontak</span>
                    </router-link>
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
            Icon,
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