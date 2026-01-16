


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
