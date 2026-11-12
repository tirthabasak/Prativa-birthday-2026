
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

document.addEventListener("click", (event) => {
    if (
        nav &&
        menuBtn &&
        !nav.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {
        nav.classList.remove("show");
    }
});
