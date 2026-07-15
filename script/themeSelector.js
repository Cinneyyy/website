let colorSchemes = [
    {
        name: "purple",
        bgImage: "purple.webp",
        bgDarkCol: "#200050",
        bgLightCol: "#420069",
        borderCol: "#a010d2",
        textCol: "#eebbff"
    },
    {
        name: "gold",
        bgImage: "gold.webp",
        bgDarkCol: "#493900",
        bgLightCol: "#8c6f09",
        borderCol: "#fcc90f",
        textCol: "#ffdda0"
    },
    {
        name: "blue",
        bgImage: "blue.webp",
        bgDarkCol: "#022486",
        bgLightCol: "#1a5090",
        borderCol: "#41a2f0",
        textCol: "#80cff0"
    },
    {
        name: "red",
        bgImage: "red.svg",
        bgDarkCol: "#1a0005",
        bgLightCol: "#350413",
        borderCol: "#ff40af",
        textCol: "#ff6b9f"
    },
    {
        name: "grey",
        bgImage: "grey.png",
        bgDarkCol: "#101010",
        bgLightCol: "#353535",
        borderCol: "#bbbbbb",
        textCol: "#bbbbbb"
    }
];

let scheme = colorSchemes[Math.floor((Math.random() * colorSchemes.length))];
let root = document.documentElement.style;
root.setProperty("--scheme-border-color", scheme.borderCol)
root.setProperty("--scheme-text-color", scheme.textCol)
root.setProperty("--scheme-bg-dark-color", scheme.bgDarkCol)
root.setProperty("--scheme-bg-light-color", scheme.bgLightCol)
root.setProperty("--scheme-bg-image", `url("img/background/${scheme.bgImage}")`)
