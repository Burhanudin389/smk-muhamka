<template>
    <div class="w-full flex items-end mt-20 md:mt-40">
        <footer class="w-full px-4 bg-slate-900 relative">
            <div class="w-full max-w-screen-custom mx-auto h-40 md:h-72 rounded-lg overflow-hidden transform -translate-y-1/2">
                <iframe class="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2027696.1957292107!2d110.12349545!3d-6.96866705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e701ff1c9c7f6c3%3A0xb57f17b0fd114c40!2sSMK%20Muhammadiyah%20Kajen!5e0!3m2!1sid!2sid!4v1659500023708!5m2!1sid!2sid" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="w-full max-w-screen-custom mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 transform -translate-y-10 md:-translate-y-16">
                <!-- SINGLE ITEM -->
                <div class="w-full text-white">
                    <img src="@/assets/logo-footer.png" alt="Logo SMK" class="w-14 mb-3" />
                    <ul class="flex flex-col space-y-2.5 md:space-y-1">
                        <li class="font-light md:font-extralight text-customLink text-slate-300 md:pr-10 leading-relaxed">
                            <p>Sekolah dengan akreditasi A, mempunyai visi Islami, Kompeten, dan Berprestasi.</p>
                            <p class="mt-3">Pilih SMK? Ya Muhamka!</p>
                        </li>
                    </ul>
                </div>
                <!-- SINGLE ITEM -->
                <div class="w-full text-white mt-5 md:mt-0">
                    <h1 class="text-lg mb-3">Informasi</h1>
                    <ul class="flex flex-col space-y-2.5 md:space-y-1">
                        <li>
                            <a href="#" class="font-light md:font-extralight text-customLink text-slate-300 hover:text-slate-400 hover:underline">Profil</a>
                        </li>
                        <li>
                            <a href="#" class="font-light md:font-extralight text-customLink text-slate-300 hover:text-slate-400 hover:underline">Program jurusan</a>
                        </li>
                        <li>
                            <a href="#" class="font-light md:font-extralight text-customLink text-slate-300 hover:text-slate-400 hover:underline">PPDB Online</a>
                        </li>
                        <li>
                            <a href="#" class="font-light md:font-extralight text-customLink text-slate-300 hover:text-slate-400 hover:underline">Berita</a>
                        </li>
                    </ul>
                </div>
                <!-- SINGLE ITEM -->
                <div class="w-full text-white">
                    <h1 class="text-lg mb-3">Menu lain</h1>
                    <ul class="flex flex-col space-y-2.5 md:space-y-1">
                        <li>
                            <a href="#" class="font-light md:font-extralight text-customLink text-slate-300 hover:text-slate-400 hover:underline">Nav items</a>
                        </li>
                        <li>
                            <a href="#" class="font-light md:font-extralight text-customLink text-slate-300 hover:text-slate-400 hover:underline">Nav items</a>
                        </li>
                        <li>
                            <a href="#" class="font-light md:font-extralight text-customLink text-slate-300 hover:text-slate-400 hover:underline">Nav items</a>
                        </li>
                        <li>
                            <a href="#" class="font-light md:font-extralight text-customLink text-slate-300 hover:text-slate-400 hover:underline">Nav items</a>
                        </li>
                        <li>
                            <a href="#" class="font-light md:font-extralight text-customLink text-slate-300 hover:text-slate-400 hover:underline">Nav items</a>
                        </li>
                    </ul>
                </div>
                <!-- SINGLE ITEM -->
                <div class="w-full text-white">
                    <h1 class="text-lg mb-3">Follow sosial media</h1>
                    <ul class="flex space-x-3">
                        <li>
                            <a href="#" class="flex justify-center items-center w-10 h-10 bg-slate-200 rounded-full">

                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex justify-center items-center w-10 h-10 bg-slate-200 rounded-full">

                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex justify-center items-center w-10 h-10 bg-slate-200 rounded-full">

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--  -->
            <p class="text-customLink text-center text-white py-10">Copyright &copy;2022, SMK Muhamka</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>