import * as flsFunctions from "./modules/functions.js"

//TODO: remove all console.log!

flsFunctions.isWebp();
window.addEventListener('load', () => {

	//TODO: so, now it's don's problem but will be better to give relevant instance names. what does mask means? loader much more relevant
    const mask = document.querySelector('.mask')
    setTimeout(() => {
        mask.classList.add('mask-none');
    }, 100)

	//TODO: above setTimeout - it's asynchronous operation. it means that when loader is active all code bellow will execute without waiting for the end of setTimeout
    new WOW().init();
    const buttonPills = document.querySelectorAll('.buttons')
    console.log(buttonPills);
    buttonPills.forEach((item) => {
        const buttonPill = new ButtonPill(item);
        // buttonPill.init()
    });
});

function ButtonPill(buttonPill) {
    const _this = this;
    this.button = [...buttonPill.querySelectorAll('.button')];
    console.log(this.button);
    this.blocks = [...buttonPill.querySelectorAll('.pills-block')];

    //TODO: Wrap bellow code piece in the method. in example name "setState" and call it method in init()
    this.button.forEach((item, index) => {
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

	//TODO: create init method with checking incoming parameters ( buttonPill ) and then if true call all class methods
}
