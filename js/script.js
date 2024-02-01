{
    const buttonTheme = document.querySelector(".js-buttonTheme");
    const themeName = document.querySelector(".js-themeName");
    const body = document.querySelector(".body");
    const section = document.querySelectorAll(".section");

    const toggleDarkTheme = () => {
        body.classList.toggle("dark");
        section.forEach((item) =>
            item.classList.toggle("darkSection"));
        themeName.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
    }

    buttonTheme.addEventListener("click", toggleDarkTheme)
}