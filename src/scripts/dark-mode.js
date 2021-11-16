// Code adapted from:
// https://github.com/NikitaZanella/11ty-SASS/blob/main/src/js/script.js

const toggleBtn = document.getElementById("toggle-btn");
const clrTheme = document.getElementById("theme");

// Dark Mode Handler => switch theme on button click.

const darkModeHandler = () => {
    if (localStorage.getItem("darkMode") == "1") {
        clrTheme.classList.remove("dark-theme");
        localStorage.setItem("darkMode", "0");
    } else {
        clrTheme.classList.add("dark-theme");
        localStorage.setItem("darkMode", "1");
    }
};

// Dark Moda State Handler => check if a 'darkMode' local store exist.
// If true, activate darkMode, else create a localStorage called 'darkMode'

const darkModeState = () => {
    if (localStorage.getItem("darkMode") == "1") {
        clrTheme.classList.add("dark-theme");
    } else {
        localStorage.setItem("darkMode", "0");
    }
};

toggleBtn.addEventListener("click", darkModeHandler);
clrTheme.addEventListener("load", darkModeState());
