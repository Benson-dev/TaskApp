const mobileBtn = document.getElementById('mobie-cta')
nav = document.querySelector('nav')
mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
nav.classList.remove('menu-btn');
})