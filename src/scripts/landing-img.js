
var imgTag = document.getElementById("landing-message");
var moonTag = document.getElementById("nightModeButton");
var homeLinks = document.querySelectorAll("a[href='/']");
var themeState = 0; // 0 = light theme; 1 = dark theme

function loadImage(st) {
    console.log(themeState);
    if (st === 0) {
        // change to the dark theme landing image (in white fonts)
        imgTag.setAttribute("src", "/images/landing-frame-black.svg");
    } else {
        // change to light theme landing image (in black fonts)
        imgTag.setAttribute("src", "/images/landing-frame-white.svg");
    }
    console.log(themeState);
    console.log("loaded image to home page");
}

// 0 (light theme) turns to 1 (dark theme), and 1 turns to 0
function updateTheme() {
    themeState = (themeState + 1) % 2;
}

moonTag.addEventListener("click", function () {

    // switch themeState on click of the 'moon' button
    updateTheme();
    loadImage(themeState);

});

// load current landing image for each press of home link
homeLinks.forEach(homelink =>
                  homelink.addEventListener('click', loadImage(themeState)));
