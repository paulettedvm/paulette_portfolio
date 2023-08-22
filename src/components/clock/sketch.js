const sketch = (p) => {
  let canvasWidth, canvasHeight;
  let hr_total = 24;
  let min_total = 60;
  let sec_total = 60;

  p.setup = () => {
    canvasWidth = p.windowWidth * 0.7;
    canvasHeight = p.windowHeight * 0.8;

    p.createCanvas(canvasWidth, canvasHeight);
    p.background(0);
  };

  p.draw = () => {
    let curr_sec = p.second();
    let curr_min = p.minute();
    let curr_hr = p.hour();

    let hr_col = p.color(252, 147, 26);
    let xy_min = draw_circles(hr_total, curr_hr, hr_col, canvasWidth - (canvasWidth - 25), canvasHeight - (canvasHeight - 25));

    let min_col = p.color(24, 157, 194);
    let xy_sec = draw_circles(min_total, curr_min, min_col, xy_min[0], xy_min[1]);

    let sec_col = p.color(151, 204, 4);
    draw_circles(sec_total, curr_sec, sec_col, xy_sec[0], xy_sec[1]);
  };

  p.windowResized = () => {
    canvasWidth = p.windowWidth * 0.7;
    canvasHeight = p.windowHeight * 0.8;
    p.resizeCanvas(canvasWidth, canvasHeight);
  };

  function draw_circles(total, curr, color, x, y) {
    for (let i = 1; i <= total; i++) {
      p.fill(i <= curr ? color : 255);
      p.ellipse(x, y, 25, 25);

      x += 50;
      if (x >= canvasWidth) {
        x = 25;
        y += 50;
      }
    }

    return [x, y];
  }
};

export default sketch;
