class Navbar extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <div id="navbar-wrapper" class="transition-all duration-300 w-full py-5 md:py-6 fixed top-0 left-0 z-20 border-b">
                <nav class="max-w-screen-container h-full mx-auto px-5 xl:px-0 flex justify-between items-center">
                    <div id="logo" class="w-10">
                        <img class="w-full" src="/src/img/logo.png" alt="Logo sekola">
                    </div>
                    <ul id="nav-list" class="transition duration-300 fixed top-0 left-0 transform -translate-y-full lg:transform-none lg:relative w-full lg:w-auto h-screen lg:h-auto bg-gray-900 text-white lg:text-gray-900 justify-center lg:bg-transparent text-xs uppercase font-medium flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:justify-center items-center lg:space-x-4">
                        <li>
                            <a class="transition-all text-green-500 font-bold hover:text-green-400" href="/index.html">Beranda</a>
                        </li>
                        <li><a class="transition-all hover:text-gray-500" href="/src/pages/tentang-kami.html">Tentang Kami</a></li>
                        <li><a onclick="event.preventDefault()" class="transition-all hover:text-gray-500" href="/src/pages/galeri.html">Guru & siswa</a></li>
                        <li><a class="transition-all hover:text-gray-500" href="/src/pages/galeri.html">Galeri</a></li>
                        <li><a class="transition-all hover:text-gray-500" href="/src/pages/artikel.html">Artikel</a></li>
                        <li><a class="transition-all hover:text-gray-500" href="/src/pages/kontak.html">Kontak</a></li>
                        <div class="flex lg:hidden space-x-3 mt-5">
                            <a href="#" class="shadow-lg text-xs border-2 border-green-500 bg-green-500 text-white px-6 py-2 rounded-md transition-all duration-300 hover:text-green-500 hover:bg-transparent uppercase font-semibold">E-Lib</a>
                            <a href="#" class="shadow-lg text-xs border-2 border-yellow-500 bg-yellow-500 text-white px-6 py-2 rounded-md transition-all duration-300 hover:text-yellow-500 hover:bg-transparent uppercase font-semibold">Ppdb</a>
                        </div>
                        <div class="lg:hidden">
                            <button id="nav-close" class="mt-20">
                                <span class="iconify text-5xl transition-all duration-300 transform hover:rotate-180 hover:scale-125" data-icon="ep:circle-close"></span>
                            </button>
                        </div>
                    </ul>
                    <div class="flex items-center space-x-2 md:space-x-5">
                        <div class="hidden lg:flex space-x-3">
                            <a href="#" class="shadow-lg text-xs border-2 border-green-500 bg-green-500 text-white px-6 py-2 rounded-md transition-all duration-300 hover:bg-green-600 uppercase font-semibold">E-Lib</a>
                            <a href="#" class="shadow-lg text-xs border-2 border-yellow-500 bg-yellow-500 text-white px-6 py-2 rounded-md transition-all duration-300 hover:bg-yellow-600 uppercase font-semibold">Ppdb</a>
                        </div>
                        <button id="nav-btn" class="lg:hidden text-xl">
                            <span class="iconify transition-all duration-300 transform hover:scale-125" data-icon="bytesize:menu"></span>
                        </button>
                    </div>
                </nav>
            </div>  
        `
    }
}

customElements.define("navbar-element", Navbar)