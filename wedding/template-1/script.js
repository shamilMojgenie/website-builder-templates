const nav = document.getElementById("navbar");
const texts = document.querySelectorAll(".nav-text");
const bars = document.querySelectorAll("label[for='menu-toggle'] span");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        nav.classList.add("bg-white", "shadow-sm");
        texts.forEach((t) => t.classList.remove("text-white"));
        texts.forEach((t) => t.classList.add("text-gray-900"));
        bars.forEach((b) => (b.style.background = "#333"));
    } else {
        nav.classList.remove("bg-white", "shadow-sm");
        texts.forEach((t) => t.classList.remove("text-gray-900"));
        texts.forEach((t) => t.classList.add("text-white"));
        bars.forEach((b) => (b.style.background = "#fff"));
    }
});
