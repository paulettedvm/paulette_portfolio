function sketch(p) {
    let canvasWidth, canvasHeight;

    p.setup = function () {
        p.clear();
        canvasWidth = p.windowWidth * 0.7;
        canvasHeight = p.windowHeight * 0.8; 
        p.createCanvas(canvasWidth, canvasHeight);
    }

    p.draw = function () {
        p.background(0);
        // Your drawing code here
    }

    p.windowResized = function () {
        canvasWidth = p.windowWidth * 0.7;
        canvasHeight = p.windowHeight * 0.8; 
        p.resizeCanvas(canvasWidth, canvasHeight);
    }
}

export default sketch;