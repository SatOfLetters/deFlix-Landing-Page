const loadingBg = document.querySelector('.loading_bg')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {

        loadingBg.classList.add('hidden')

    }
}


ScrollReveal().reveal('.text_ctnr p, .bullets, .chair_img, .inefficiency', {
    duration: 800,
    easing: 'ease'
});



const nav = document.querySelector('header nav')
const hamBt = document.querySelector('.hambt')
const hambFill = document.querySelector('.hambt div div')

let showingMenu = false;


function hamburguer() {
    if (showingMenu == false) {
        nav.style.transform = 'translateY(0)';
        hambFill.style.transform = 'translateY(0)'

        showingMenu = true;
    } else {
        nav.style.transform = 'translateY(100%)';
        hambFill.style.transform = 'translateY(100%)'

        showingMenu = false;
    }
}

hamBt.addEventListener('click', hamburguer)

document.body.onscroll = function () {
    if (showingMenu == true) {
        hamburguer()
    }
}