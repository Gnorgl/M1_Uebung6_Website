/* Für Private, inspo: https://stackoverflow.com/questions/34093732/fade-out-div-on-scroll */
window.addEventListener('scroll', function() {
    const imageToFade = document.getElementById('HeaderBild');

    if (imageToFade) {
        const scrollPosition = window.scrollY;
        const fadeOutPoint = 1000; 

        let newOpacity = 1 - (scrollPosition / fadeOutPoint);

        if (newOpacity < 0) {
            newOpacity = 0;
        }

        imageToFade.style.opacity = newOpacity;
    }
});