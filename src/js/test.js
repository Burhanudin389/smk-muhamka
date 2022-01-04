// const dropdownWrapper = document.querySelectorAll('.dropdown-wrapper')
// dropdownWrapper.forEach(dropdown => {
//     const dropdownBtn = dropdown.querySelector('.dropdown-btn')
//     const dropdownMenu = dropdown.querySelector('.dropdown-menu')
//     const dropdownMenuLink = dropdown.querySelectorAll('li a')
//     dropdownBtn.addEventListener("click", function(event) {
//         dropdownMenu.classList.toggle('hidden')
//         dropdownMenuLink.forEach(link => {
//             link.addEventListener('click', function() {
//                 // console.log(this);
//                 dropdownMenu.classList.toggle('hidden')
//             })
//         })
//         if (event.target !== dropdownMenu) {
//             console.log(this);
//         }
//         // if(dropdownMenu.classList.contains('hidden')) {
//         //     if (event.target !== dropdownMenu) {
//         //         console.log(this);
//         //     }
//         // }
//     })
// })