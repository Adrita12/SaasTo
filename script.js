const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');
const segment2 = document.querySelector('.segment2');
const segment3 = document.getElementById('segment3');

burger.addEventListener('click', () => {
    nav.classList.toggle('side-nav-active');
    segment2.classList.toggle('side-nav');
    segment3.classList.toggle('side-nav');
});
