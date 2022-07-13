const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-item');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
})