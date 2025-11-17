const nav = document.getElementById("navbar");
const texts = document.querySelectorAll(".nav-text");
const bars = document.querySelectorAll("label[for='menu-toggle'] span");
const heading = document.querySelectorAll(".nav-heading");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        nav.classList.add("md:bg-white", "shadow-sm");
        texts.forEach((t) => t.classList.remove("md:text-white"));
        texts.forEach((t) => t.classList.add("md:text-gray-900"));
    } else {
        nav.classList.remove("md:bg-white", "shadow-sm");
        texts.forEach((t) => t.classList.remove("md:text-gray-900"));
        texts.forEach((t) => t.classList.add("md:text-white"));

    }
});
