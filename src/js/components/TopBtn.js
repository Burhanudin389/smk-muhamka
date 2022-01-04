class BackToTop extends HTMLElement {
    connectedCallback() {
        this.render()
    }
    
    render() {
        this.innerHTML = `
            <button id="top-btn" class="animate-bounce fixed focus:ring-2 focus:ring-green-300 transition-all duration-300 opacity-0 bottom-0 right-0 z-30 m-7 md:m-10 w-10 h-10 bg-green-500 text-white grid place-items-center rounded-md hover:bg-green-700">
                <span class="iconify" data-icon="ic:baseline-vertical-align-top"></span>
            </button>
        `
    }
}

customElements.define("top-btn", BackToTop)