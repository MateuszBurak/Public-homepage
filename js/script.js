let buttonTheme = document.querySelector(".js-buttonTheme");
let themeName = document.querySelector(".js-themeName");
let body = document.querySelector(".body");
let navigation__button = document.querySelector(".navigation__button");
const section = document.querySelectorAll(".section");

buttonTheme.addEventListener("click", () => {
    body.classList.toggle("dark");
    section.forEach((item) =>
        item.classList.toggle("darkSection"));
themeName.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
}
)