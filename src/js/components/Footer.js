class Footer extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <footer id="footer" class="relative">
                <div class="w-full h-auto md:h-40 relative bg-gray-300 overflow-hidden">
                    <div class="w-full h-full bg-gray-400 absolute inset-0 transform md:translate-x-28 z-0"></div>
                    <div class="max-w-screen-container mx-auto relative py-10 md:py-0 px-5 z-10 flex flex-wrap items-center h-full space-y-3">
                        <div class="w-full md:w-1/2 mb-5 md:mb-0 lg:pl-10">
                            <h1 class="font-semibold">Subscribe untuk mendapatkan <br> informasi terbaru dari kami</h1>
                        </div>
                        <form action="#" class="w-full md:w-1/2 h-14 bg-white relative p-3 rounded-md">
                            <input required type="email" class="w-full placeholder-gray-500 md:max-w-md h-full text-xs pl-3 outline-none bg-transparent" placeholder="Masukkan email anda">
                            <button class="w-24 md:w-32 uppercase font-semibold rounded-md text-white h-10 m-2 bg-green-500 absolute right-0 top-0 text-xs transition-all duration-300 hover:bg-green-700 focus:ring-2 focus:ring-green-300">Submit</button>
                        </form>
                    </div>
                </div>
                <div id="footer-bottom" class="w-full h-full mx-auto px-5 bg-gray-900">
                    <div class="max-w-screen-container mx-auto flex flex-wrap text-white pt-14 space-y-10 ">
                        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/5">
                            <img class="w-40 md:mt-7" src="/src/img/logo-light.png" alt="">
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/5">
                            <ul class="space-y-2 text-sm">
                                <li class="uppercase font-semibold mb-5 text-gray-400">Informasi</li>
                                <li class="hover:text-gray-300"><a href="#">Seputar PPDB</a></li>
                                <li class="hover:text-gray-300"><a href="#">Seputar</a></li>
                                <li class="hover:text-gray-300"><a href="#">Seputar PPDB</a></li>
                                <li class="hover:text-gray-300"><a href="#">PPDB</a></li>
                            </ul>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/5">
                            <ul class="space-y-2 text-sm">
                                <li class="uppercase font-semibold mb-5 text-gray-400">Informasi</li>
                                <li class="hover:text-gray-300"><a href="#">Seputar PPDB</a></li>
                                <li class="hover:text-gray-300"><a href="#">Seputar</a></li>
                                <li class="hover:text-gray-300"><a href="#">Seputar PPDB</a></li>
                                <li class="hover:text-gray-300"><a href="#">PPDB</a></li>
                            </ul>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/5">
                            <ul class="space-y-2 text-sm">
                                <li class="uppercase font-semibold mb-5 text-gray-400">Informasi</li>
                                <li class="hover:text-gray-300"><a href="#">Seputar PPDB</a></li>
                                <li class="hover:text-gray-300"><a href="#">Seputar</a></li>
                                <li class="hover:text-gray-300"><a href="#">Seputar PPDB</a></li>
                                <li class="hover:text-gray-300"><a href="#">PPDB</a></li>
                            </ul>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/5">
                            <li class="uppercase text-sm font-semibold mb-5 block">Sosial Media</li>
                            <ul class="space-x-3 flex">
                                <li class="text-sm">
                                    <a href="#" class="flex justify-center items-center w-9 h-9 md:w-10 md:h-10 rounded-full text-md text-blue-700 transition-all duration-300 hover:bg-gray-300 bg-white focus:ring-2 focus:ring-white">
                                    <span class="iconify" data-icon="brandico:facebook"></span>
                                    </a>
                                </li>
                                <li class="text-sm">
                                    <a href="#" class="flex justify-center items-center w-9 h-9 md:w-10 md:h-10 rounded-full text-md text-pink-500 transition-all duration-300 hover:bg-gray-300 bg-white focus:ring-2 focus:ring-white">
                                        <span class="iconify" data-icon="akar-icons:instagram-fill"></span>
                                    </a>
                                </li>
                                <li class="text-sm">
                                    <a href="#" class="flex justify-center items-center w-9 h-9 md:w-10 md:h-10 rounded-full text-md text-blue-500 transition-all duration-300 hover:bg-gray-300 bg-white focus:ring-2 focus:ring-white">
                                        <span class="iconify" data-icon="akar-icons:twitter-fill"></span>
                                    </a>
                                </li>
                                <li class="text-sm">
                                    <a href="#" class="flex justify-center items-center w-9 h-9 md:w-10 md:h-10 rounded-full text-md text-red-500 transition-all duration-300 hover:bg-gray-300 bg-white focus:ring-2 focus:ring-white">
                                        <span class="iconify" data-icon="akar-icons:youtube-fill"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="px-5 text-center text-xs text-white bg-gray-900 py-14 md:pt-32">
                    <span>Copyright2021 @MUHAMKA, All rights reserverd.</span>
                </div>
            </footer>
        `
    }
}

customElements.define("footer-element", Footer)