// TODO: add more strings
const strings = [
    "‼️ SITE UNDER CONSTRUCTION ‼️",
    ":3",
    "www.colin.monster",
    "<img src='img/pfp.png' style='width: 40px; height: 40px; margin-top: 5px; margin-right: 10px;'>".repeat(3),
    "Crazy? I was crazy once. They put me in a room. A rubber room. A rubber room with rats. And rats make me crazy. ".repeat(20),
    "🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛🐛",
    "🎷🐠 🎷🐛 🎷🪱 🎷🐓"
];

const seconds = 10;
const element = document.getElementById("marquee-content");

let lastIndex = -1;

function startMarquee(stringIndex) {
    for(const anim of element.getAnimations()) {
        anim.cancel();
    }

    if(!stringIndex) {
        do {
            stringIndex = Math.floor(Math.random() * strings.length);
        }
        while(stringIndex == lastIndex);
    }

    element.innerHTML = strings[stringIndex];
    element.animate(
        [
            {
                transform: "translateX(-100%)"
            },
            {
                transform: "translateX(0%)"
            }
        ],
        {
            duration: (seconds-1) * 1000,
            iterations: 1,
            easing: "linear"
        }
    )
}

startMarquee(0);
setInterval(() => startMarquee(null), seconds * 1000);
