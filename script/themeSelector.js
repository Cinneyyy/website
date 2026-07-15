// TODO: implemet in-scheme variations; e.g. darker backgrounds
// TODO: use css properties instead of setting node styles via js

let colorSchemes = [
    {
        name: "purple",
        bgImage: "img/backgrounds/purple.webp",
        bgDarkCol: "#200050",
        bgLightCol: "#420069",
        borderCol: "#a010d2",
        textCol: "#eebbff"
    },
    {
        name: "gold",
        bgImage: "img/backgrounds/gold.webp",
        bgDarkCol: "#493900",
        bgLightCol: "#8c6f09",
        borderCol: "#fcc90f",
        textCol: "#ffdda0"
    }
];

let scheme = colorSchemes[Math.floor((Math.random() * colorSchemes.length))];

for(let elem of new Set([
    ...document.getElementsByClassName("border"),
    ...document.querySelectorAll("body,div,td")
])) {
    elem.style.border = `solid 2px ${scheme.borderCol}`;
}

// TODO: fix
for(let elem of document.querySelectorAll("*")) {
    if(!elem.style.color) {
        elem.style.color = scheme.textCol;
    }
}

document.querySelector("html").style.backgroundImage = `url("${scheme.bgImage}")`;

let body = document.body.style;
body.borderWidth = "4px";
body.background = `radial-gradient(circle at 50% 50%, ${scheme.bgLightCol}, ${scheme.bgDarkCol} 90%)`;
