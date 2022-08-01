<template>
    <!-- START : HEADER -->
    <header class="w-full relative h-custom-header z-10">
        <div class="w-full h-full max-w-screen-2xl mx-auto relative flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center">
            <div class="w-full max-w-screen-custom mx-auto absolute z-20 lg:left-1/2 lg:transform lg:-translate-x-1/2 p-8 md:p-4 xl:p-0">
                <h1 class="text-4xl md:text-5xl max-w-lg">SMK Muhammadiyah Kajen</h1>
                <p class="font-light max-w-md mt-5">Sekolah dengan akreditasi A, mempunyai visi Islami, Kompeten, dan Berprestasi</p>
                <router-link to="/" class="flex justify-center items-center w-40 h-12 rounded-md transition-all duration-300 bg-slate-300 hover:bg-slate-400 mt-5">Tentang kami</router-link>
            </div>
            <div class="w-full h-full md:w-8/12 absolute right-0 top-0 p-4 md:p-0">
                <swiper 
                    :modules="modules"
                    :loop="true"
                    :pagination="{ clickable: true }"
                    :autoplay="{ delay: 3500, disableOnInteraction: false }">
                    <swiper-slide>
                        <div class="w-full h-full">
                            <img src="@/assets/slide-1.png" class="w-full h-full object-cover rounded-lg md:rounded-none" alt="">
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="w-full h-full">
                            <img src="@/assets/banner-example.png" class="w-full h-full object-cover rounded-lg md:rounded-none" alt="">
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="w-full h-full">
                            <img src="@/assets/banner-example.png" class="w-full h-full object-cover rounded-lg md:rounded-none" alt="">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </header>
    <!-- END : HEADER -->
    <div class="w-full px-4">

    </div>
</template>

<script>
    import SwiperClass, { Pagination } from 'swiper'
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

    import 'swiper/css'
    import 'swiper/css/pagination'

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        setup() {
            return {
                modules: [
                    Pagination
                ]
            }
        },
        mounted() {
            // SET PAGE TITLE
            document.title = "Beranda - SMK MUHAMMADIYAH KAJEN";          
        },
    }
</script>