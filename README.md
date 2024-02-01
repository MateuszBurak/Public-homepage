# Mateusz Burak - learning Frontend programming

## Homepage and portfolio
[Link to the site](https://mateuszburak.github.io/Public-homepage/)

Hi! I'm Matthew and this is my site, serving as a portfolio and the initial way to get to know me as a programmer and a person.

It's supposedly an infinite work-in-progress, so, expect **changes**!

## Website versions

### 1. First version - January 31st, 2024

![A gif of the first version of the site](images/Animation.gif)

The first version of the website utilized basic tools of a Frontend developer, first using normalize.min.css and alternative Box Model. The site also followed the BEM convention.

Something that I've found on my own, stranding from the course a little bit, was using *const* and *querySelectorAll* to grab every HTML element with the class **section** instead of taking the first one and adding the dark theme only to one section.

I've done it so that the bottom borders change colors for each section.

```javascript
    const section = document.querySelectorAll(".section");

    section.forEach((item) =>
        item.classList.toggle("darkSection"));
```

Other than that, it's a pretty simple code that changes the background and some borders to create a sort of a dark theme of the site. It uses ES6+ features and looks like this:

![A gif of the dark theme script](images/darkTheme.gif)
