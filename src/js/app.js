import "./components/Navbar.js";
import "./components/Footer.js";
import "./components/TopBtn.js";
import "./components/ArticleCard.js";
import "./components/Maps.js";

const navbarWrapper = document.querySelector("#navbar-wrapper");
const navBtn = document.querySelector("#nav-btn");
const navUl = document.querySelector("#nav-list")
const navClose = document.querySelector("#nav-close")
const navLink = document.querySelectorAll("#nav-list li")
navBtn.addEventListener("click", function() {
    navUl.classList.remove("-translate-y-full")
})

navClose.addEventListener("click", function(){
    navUl.classList.add("-translate-y-full")
})

navLink.forEach(link => {
    link.addEventListener("click", function() {
        navUl.classList.add("-translate-y-full")
    })
})

window.addEventListener("scroll", function() {
    const windowScrollPos = this.pageYOffset;
    if(windowScrollPos > navbarWrapper.clientHeight) {
        navbarWrapper.classList.replace("py-5", "py-4")
        navbarWrapper.classList.replace("md:py-6", "md:py-5")
        navbarWrapper.classList.add("bg-white")
        navbarWrapper.classList.add("shadow-md")
    } else {
        navbarWrapper.classList.replace("py-4", "py-5")
        navbarWrapper.classList.replace("md:py-5", "md:py-6")
        navbarWrapper.classList.remove("bg-white")
        navbarWrapper.classList.remove("shadow-md")
    }
})

const topBtn = document.querySelector("#top-btn")
topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0, 
        behavior: "smooth"
    })
})
window.addEventListener("scroll", function() {
    const scrollPosition = this.pageYOffset;
    if(scrollPosition > 400) {
        topBtn.classList.remove("opacity-0")
    } else {
        topBtn.classList.add("opacity-0")
    }
})
AOS.init() 


const bannerHeading = {
  strings: ['Selamat datang di <br /> website SMK MUHAMKA'],
  typeSpeed: 40,
  showCursor: false
};
const bannerText = {
  strings: ['Muhamka merupakan sekolah modern <br> dengan kurikulum standar industri', 'Visi MUHAMKA, <br /> Islami, Kompeten dan Berprestasi.'],
  typeSpeed: 40,
  showCursor: false,
  loop: 1
};

let renderBannerHeading = new Typed('#banner-heading', bannerHeading),
renderBannerText = new Typed('#banner-text', bannerText);

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 4000,
    },
});