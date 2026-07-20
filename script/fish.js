{
    const fgCanvas = document.getElementById("fg-canvas");
    const fgCtx = fgCanvas.getContext("2d");

    function fgResize() {
        fgCanvas.width = window.innerWidth;
        fgCanvas.height = window.innerHeight;
    }

    window.addEventListener("resize", fgResize);
    fgResize();

    fgCtx.clearRect(0, 0, fgCanvas.width, fgCanvas.height);

    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    const bubbleImg = new Image();
    bubbleImg.src = "/img/fish/bubble.png";

    const params = {
        bubble: {
            chance: 0.15,
            vel: {
                min: 5,
                max: 15
            },
            sineDev: 100,
            sineBaseFreq: 0.005,
            size: {
                min: 18,
                max: 28
            }
        }
    };

    const state = {
        ticks: 0,
        bubbles: []
    };

    class Bubble {
        constructor() {
            this.startX = Math.random() * (canvas.width + params.bubble.size.max) - params.bubble.size.max;
            this.pos = {
                x: this.startX,
                y: canvas.height
            };
            this.vel = Math.random() * (params.bubble.vel.max - params.bubble.vel.min) + params.bubble.vel.min;
            this.sineOffset = Math.random() * 2 * Math.PI;
            this.size = Math.random() * (params.bubble.size.max - params.bubble.size.min) + params.bubble.size.min;
        }


        tick() {
            this.pos.x = this.startX + params.bubble.sineDev * Math.sin(params.bubble.sineBaseFreq * 2 * Math.PI * this.vel / params.bubble.vel.max * state.ticks);
            this.pos.y -= this.vel;

            ctx.drawImage(bubbleImg, this.pos.x, this.pos.y, this.size, this.size);
        }
    }

    function draw() {
        state.ticks++;

        ctx.fillStyle = "#113c82";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if(Math.random() < params.bubble.chance) {
            state.bubbles.push(new Bubble());
        }

        for(const bubble of state.bubbles) {
            bubble.tick();
        }

        state.bubbles = state.bubbles.filter(bubble => {
            return bubble.pos.y > -bubble.size;
        })

        window.requestAnimationFrame(draw);
    }

    draw();
}
