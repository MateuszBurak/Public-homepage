# Mateusz Burak - learning Frontend programming

## Homepage and portfolio
[Link to the site](https://mateuszburak.github.io/Public-homepage/)

Hi! I'm Matthew and this is my site, serving as a portfolio and the initial way to get to know me as a programmer and a person.

It's supposedly an infinite work-in-progress, so, expect **changes**!

## Website versions

1. First version - January 31st, 2024

The first version of the website utilized basic tools of a Frontend developer, first using normalize.min.css and alternative Box Model. The site also followed the BEM convention.

Something that I've found on my own, stranding from the course a little bit, was using *const* and *querySelectorAll* to grab every HTML element with the class **section** instead of taking the first one and adding the dark theme only to one section.

Other than that, it's a pretty simple code.

```javascript
let  buttonTheme  =  document.querySelector(".js-buttonTheme");

let  themeName  =  document.querySelector(".js-themeName");

let  body  =  document.querySelector(".body");

let  navigation__button  =  document.querySelector(".navigation__button");

const  section  =  document.querySelectorAll(".section");



buttonTheme.addEventListener("click", () => {

body.classList.toggle("dark");

navigation__button.classList.toggle("darkButton");

section.forEach((item) =>

item.classList.toggle("darkSection"));

themeName.innerText  =  body.classList.contains("dark") ?  "jasne"  :  "ciemne";

}

)
```
