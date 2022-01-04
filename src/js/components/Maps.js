class Maps extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    
    render() {
        this.innerHTML = `
            <section id="location">
                <div class="max-w-screen-container mx-auto text-center px-5 mb-10 md:mb-28">
                    <div class="space-y-3 mb-10">
                        <h3 class="uppercase text-green-500 font-bold text-sm md:text-base">Lokasi</h3>
                        <h1 id="heading-text" class="font-bold text-lg md:text-xl">Kunjungi kami di</h1>
                    </div>
                    <div class="relative flex flex-wrap justify-center">
                        <iframe data-aos="fade-up" width="100%" class="h-40 md:h-72 rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.8967927632225!2d109.58196574970337!3d-7.021416570707521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e701ff1c9c7f6c3%3A0xb57f17b0fd114c40!2sSMK%20Muhammadiyah%20Kajen!5e0!3m2!1sid!2sid!4v1638577980352!5m2!1sid!2sid" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        <div class="relative rounded-md transform md:-translate-y-1/2 bg-white md:max-w-4xl mx-auto space-y-5 md:space-y-0 p-5 md:p-0 md:absolute md:top-full w-full h-auto md:h-28 shadow-lg flex flex-col md:flex-row justify-between items-center">
                            <div class="w-full md:w-1/3 flex items-center text-left space-x-3 md:pl-5 hover:text-gray-400">
                                <a target="_blank" href="https://g.page/smkmuhamka?share" class="w-10 h-10 bg-green-500 text-white flex justify-center items-center rounded-full">
                                    <span class="iconify text-xl" data-icon="fluent:location-12-regular"></span>
                                </a>
                                <a target="_blank" href="https://g.page/smkmuhamka?share" class="text-xs">Jl. Pahlawan, Kec. Kajen,<br /> Pekalongan, Jawa Tengah 51161</a>
                            </div>
                            <div class="w-full md:w-1/3 flex items-center text-left space-x-3 md:pl-5 hover:text-gray-400">
                                <a href="mailto:smkmuhamka@gmail.com" class="w-10 h-10 bg-green-500 text-white flex justify-center items-center rounded-full">
                                    <span class="iconify text-xl" data-icon="fluent:mail-16-regular"></span>
                                </a>
                                <a href="mailto:smkmuhamka@gmail.com" class="text-xs">smkmuhamka@gmail.com</a>
                            </div>
                            <div class="w-full md:w-1/3 flex items-center text-left space-x-3 md:pl-5 hover:text-gray-400">
                                <a href="#" class="w-10 h-10 bg-green-500 text-white flex justify-center items-center rounded-full">
                                    <span class="iconify text-xl" data-icon="carbon:phone-voice"></span>
                                </a>
                                <a href="#" class="text-xs">(0285) 381464</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
}

customElements.define("maps-element", Maps)