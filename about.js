const backGround = document.querySelector('.erste');
const erste = document.querySelector('.zweite');
const zweite = document.querySelector('.box');
const elemente = [backGround, erste, zweite, zweite];
const header = document.querySelector('.header');

const headers = document.querySelectorAll('.top-stuff');
const orangeHeader = headers[0];
const links = document.querySelectorAll('a');
const scrollContainer = document.querySelector('.scroll-container');
const greenHeader = headers[1];


links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        elemente[index].scrollIntoView({behavior: 'smooth'});
    })
});

scrollContainer.addEventListener('scroll', () => {
    const position = erste.getBoundingClientRect();
    const rect = zweite.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if(position.top <= 0) {
        header.style.background = "rgb(218, 111, 10)";
    } else if (position.top >= 0) {
        console
         header.style.background = "none";
    }
    if(rect.top <= windowHeight/15) {
        header.style.background = "rgb(195, 185, 0)";
    }
})