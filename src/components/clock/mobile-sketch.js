const MobileSketch = (p) => {
    p.setup = () => {
        p.createCanvas(200, 200);
        p.angleMode(p.DEGREES);
    };

    p.draw = () => {
        p.background(0);

        let hr = p.hour();
        let mn = p.minute();
        let sc = p.second();

        p.push(); // Save the current state of transformation matrix
        p.translate(p.width / 2, p.height / 2);
        p.rotate(-90);

        p.strokeWeight(5);
        p.noFill();

        // Colors for the arcs
        let hr_col = p.color(252, 147, 26);
        let min_col = p.color(66, 202, 253);
        let sec_col = p.color(176, 132, 204);

        // Seconds
        p.stroke(sec_col);
        let end1 = p.map(sc, 0, 60, 0, 360);
        p.arc(0, 0, 150, 150, 0, end1);

        // Minutes
        p.stroke(min_col);
        let end2 = p.map(mn, 0, 60, 0, 360);
        p.arc(0, 0, 140, 140, 0, end2);

        // Hours
        p.stroke(hr_col);
        let end3 = p.map(hr % 12, 0, 12, 0, 360);
        p.arc(0, 0, 130, 130, 0, end3);

        p.pop(); // Restore the previous state of transformation matrix
    };
};

export default MobileSketch;
