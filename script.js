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


const toggleCheckbox = document.getElementById('theme-toggle-checkbox');
const htmlElement = document.documentElement;
const modeText = document.getElementById('mode-text'); 

// Funktion um Text zu aktualisieren
function updateText(isDark) {
    if (isDark) {
        modeText.innerText = "Darkmode";
    } else {
        modeText.innerText = "Lightmode";
    }
}

// Beim Laden prüfen
const currentTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (currentTheme === 'dark' || (!currentTheme && systemDark)) {
    htmlElement.setAttribute('data-theme', 'dark');
    toggleCheckbox.checked = true;
    updateText(true); 
} else {
    htmlElement.setAttribute('data-theme', 'light');
    toggleCheckbox.checked = false;
    updateText(false); 
}

// Umschalten
toggleCheckbox.addEventListener('change', function() {
    if (this.checked) {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateText(true); 
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateText(false); 
    }
});
