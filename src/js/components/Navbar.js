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
                    <ul id="nav-list" class="transition duration-300 fixed top-0 left-0 transform -translate-y-full lg:transform-none lg:relative w-full lg:w-auto min-h-screen lg:min-h-0 py-20 lg:py-0 h-auto bg-gray-900 text-white lg:text-gray-900 justify-center lg:bg-transparent text-xs uppercase font-medium flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:justify-center items-center lg:space-x-4 z-20">
                        <li>
                            <a class="transition-all text-green-500 font-bold hover:text-green-400" href="/index.html">Beranda</a>
                        </li>
                        
                        <li><a class="transition-all hover:text-gray-500" href="/src/pages/tentang-kami.html">Tentang Kami</a></li>
                        <li id="dropdown" class="relative text-center lg:text-left w-full lg:w-auto px-5 lg:px-0">
                            <a id="dropdown-btn" onclick="event.preventDefault() || event.stopPropagation()" class="transition-all hover:text-gray-500 flex justify-center items-center" href="/src/pages/galeri.html">Guru & siswa<span class="iconify ml-1" data-icon="akar-icons:chevron-down"></span></a>
                            <div id="dropdown-content" class="relative lg:absolute lg:top-full left-0 w-full lg:w-customDropdown h-auto bg-white rounded-md shadow-lg mt-5 lg:mt-10 border hidden z-20">
                                <ul class="flex flex-wrap items-start text-gray-700 p-8 space-y-8 lg:space-y-0">
                                    <li class="w-full lg:w-1/2">
                                        <a href="#" class="flex items-center dropdown-heading">
                                            <img class="w-8 lg:w-10" src="/src/img/icon/achievement.svg" alt="Prestasi">
                                            <div class="flex text-left flex-col space-y-1 capitalize ml-3">
                                                <h3 class="uppercase font-semibold">Prestasi</h3>
                                                <span class="font-semibold text-gray-400">Prestasi siswa/i Muhamka</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="w-full lg:w-1/2">
                                        <a href="#" class="flex items-center dropdown-heading">
                                            <img class="w-8 lg:w-10" src="/src/img/icon/teacher.svg" alt="Prestasi">
                                            <div class="flex text-left flex-col space-y-1 capitalize ml-3">
                                                <h3 class="uppercase font-semibold">Guru dan karyawan</h3>
                                                <span class="font-semibold text-gray-400">Guru & karyawan Muhamka</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="w-full lg:w-1/2 lg:pt-10">
                                        <a href="#" class="flex items-center dropdown-heading">
                                            <img class="w-8 lg:w-10" src="/src/img/icon/jobs.svg" alt="Lowongan Pekerjaan">
                                            <div class="flex text-left flex-col space-y-1 capitalize ml-3">
                                                <h3 class="uppercase font-semibold">Loker</h3>
                                                <span class="font-semibold text-gray-400">Lowongan pekerjaan</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
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
                            <a target="_blank" href="https://elibmuhamka.com/index.php" class="shadow-lg text-xs bg-green-500 text-white px-6 py-2 rounded-md transition-all duration-300 hover:bg-green-600 uppercase font-semibold">E-Lib</a>
                            <a target="_blank" href="https://smkmuhamka.sch.id/ppdb2022/" class="shadow-lg text-xs bg-yellow-500 text-white px-6 py-2 rounded-md transition-all duration-300 hover:bg-yellow-600 uppercase font-semibold">Ppdb</a>
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