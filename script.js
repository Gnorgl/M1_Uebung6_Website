/* Für Private, inspo: https://stackoverflow.com/questions/34093732/fade-out-div-on-scroll */
window.addEventListener('scroll', function() {
    const imageToFade = document.getElementById('HeaderBild');

    if (imageToFade) {
        const scrollPosition = window.scrollY;
        const fadeOutPoint = 900; 

        let newOpacity = 1 - (scrollPosition / fadeOutPoint);

        if (newOpacity < 0) {
            newOpacity = 0;
        }

        imageToFade.style.opacity = newOpacity;
    }
});

/* Für Private "Individuell" Link Farbe ändern, inspo: https://www.youtube.com/watch?v=b3Sh4oydzoU */
/* const orangeText = document.querySelector('.intro-text span');

if (orangeText) {
    orangeText.addEventListener('click', function() {
        this.classList.toggle('clicked');
    
    })
}*/
