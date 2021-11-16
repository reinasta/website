// Render blocking script

const theme = localStorage.getItem('darkMode') || "0";
if (theme == "1") {
    document.body.className = "dark-theme";
} else {
    document.body.className = "";
}
