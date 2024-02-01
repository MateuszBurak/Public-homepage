{
    const toggleDarkTheme = () => {

        const body = document.querySelector(".body");

        body.classList.toggle("dark");

        const section = document.querySelectorAll(".section");

        section.forEach((item) =>
            item.classList.toggle("darkSection"));

        const themeName = document.querySelector(".js-themeName");

        themeName.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
    }
    const init = () => {
        const buttonTheme = document.querySelector(".js-buttonTheme");

        buttonTheme.addEventListener("click", toggleDarkTheme)
    }
    init();
}