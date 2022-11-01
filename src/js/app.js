import * as flsFunctions from "./modules/functions.js"

flsFunctions.isWebp();
window.addEventListener('load', () => {
    const mask = document.querySelector('.mask')
    setTimeout(() => {
        mask.classList.add('mask-none');
    }, 1200)
})
