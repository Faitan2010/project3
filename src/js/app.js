import * as flsFunctions from "./modules/functions.js"


flsFunctions.isWebp();
window.addEventListener('load', () => {

    const mask = document.querySelector('.loader-mask')
        mask.classList.add('loader-mask-none');
    new WOW().init();
    const buttonPills = document.querySelectorAll('.buttons')
    buttonPills.forEach((item) => {
        const buttonPill = new ButtonPill(item);
        buttonPill.init()
    });
});

function ButtonPill(buttonPill) {
    const _this = this;
    this.button = [...buttonPill.querySelectorAll('.button')];
    this.blocks = [...buttonPill.querySelectorAll('.pills-block')];

    this.setState = function () {
        _this.button.forEach((item, index) => {
            item.addEventListener('click', function(e) {
                if(this.classList.contains('active')) {
                    return
                }
                const activeIndex = _this.button.findIndex((b) => {
                    return b.classList.contains('active')
                })
                _this.button[activeIndex].classList.remove('active')
                this.classList.add('active')
                _this.blocks[activeIndex].classList.remove('grid')
                _this.blocks[activeIndex].classList.add('hidden')
                _this.blocks[index].classList.remove('hidden')
                _this.blocks[index].classList.add('grid')
            })
        })
    }
    this.init = () => {
        if (!buttonPill) {
            return;
        }
        this.setState();
    }
}
