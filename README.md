# Mateusz Burak - learning Frontend programming

## Homepage and portfolio
[Link to the site](https://mateuszburak.github.io/Public-homepage/)

Hi! I'm Matthew and this is my site, serving as a portfolio and the initial way to get to know me as a programmer and a person.

It's supposedly an infinite work-in-progress, so, expect **changes**!

## Website versions

1. First version - January 31st, 2024

The first version of the website utilized basic tools of a Frontend developer, first using normalize.min.css and alternative Box Model. The site also followed the BEM convention.

Something that I've found on my own, stranding from the course a little bit, was using *const* and *querySelectorAll* to grab every HTML element with the class **section** instead of taking the first one and adding the dark theme only to one section.

Other than that, it's a pretty simple code. It uses ES6+ features and has 2 functions:

```javascript
const toggleDarkTheme = () => {

    const body = document.querySelector(".body");

    body.classList.toggle("dark");

    const section = document.querySelectorAll(".section");

    section.forEach((item) =>
        item.classList.toggle("darkSection"));

    const themeName = document.querySelector(".js-themeName");

    themeName.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
    }
```

```javascript
const init = () => {
    const buttonTheme = document.querySelector(".js-buttonTheme");

    buttonTheme.addEventListener("click", toggleDarkTheme)
    }
init();
```
