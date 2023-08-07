const translate = document.querySelectorAll('.translate');
const bigtitle = document.querySelector('.big-title');
const header = document.querySelector('header');
const section = document.querySelector('section');
const content = document.querySelector('.content');
const opacity = document.querySelectorAll('.opacity')
const border = document.querySelector('.border');

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

    bigtitle.style.opacity = -scroll / (header_height / 2) + 1;

    border.style.width = `${scroll / (sectionY.top + section_height) * 50}%`;
})