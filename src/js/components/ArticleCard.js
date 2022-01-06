class ArticleCard extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <div class="w-full h-auto text-left md:mb-5 border md:border-none overflow-hidden">
            <a href="/src/pages/detail-artikel.html" class="w-full md:h-full md:w-auto overflow-hidden"> 
                <img class="w-full md:h-auto md:w-full transition-all duration-300 transform hover:scale-110" src="/src/img/blog.png" alt="">
            </a>
            <div class="space-y-2 p-3 md:p-0 md:pr-3">
                <div class="mt-3">
                    <a href="#" class="font-semibold text-gray-700 hover:text-gray-500 text-sm">Lorem ipsum dolor sit amet, consec tetur adip</a>
                </div>
                <div class="flex items-center space-x-3">
                    <img class="w-8" src="/src/img/uploader.png" alt="">
                    <div>
                        <p class="text-xs text-gray-500">Oleh admin</p>
                        <p class="text-xs">27 November 2021</p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
customElements.define("article-card", ArticleCard)