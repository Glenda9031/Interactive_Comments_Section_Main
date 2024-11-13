function toggleTheme() {
    document.getElementById("toggle").addEventListener("click", () => {
        document.getElementsByTagName("body")[0].classList.toggle("light-theme");
    });
}

function themeOnLoad() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light').matches) {
        document.getElementsByTagName("body")[0].classList.add("light-theme");
    }
}

toggleTheme();
window.onload = themeOnLoad;
