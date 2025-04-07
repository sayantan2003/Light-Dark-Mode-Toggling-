
let darkmode = localStorage.getItem("darkmode");
const themeSwitch =document.getElementById("toggle-button");

function enableDarkMode() {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
}
function disableDarkMode() {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});