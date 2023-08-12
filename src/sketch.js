function sketch(p) {
    let x = 0;
    p.setup = function () {
        p.createCanvas(500, 500);
    }

    p.draw = function () {
        p.background(0);
        /* p.fill(125);
        p.ellipse(x, p.height / 2, 50, 50);
        x += 1;
        if (x > p.width) {
            x = 0;
        } */
    }
}

export default sketch;