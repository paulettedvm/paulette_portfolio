const sketch = (p) => {
  let canvasWidth, canvasHeight;
  let hr_total = 24;
  let min_total = 60;
  let sec_total = 60;
  let circleSize = 25;
  let circleSpacing = 25;

  p.setup = () => {
    canvasWidth = p.windowWidth * 0.7;
    canvasHeight = p.windowHeight * 0.8;

    p.createCanvas(canvasWidth, canvasHeight);
    p.background(0);
    updateCircleParameters();
  };

  p.draw = () => {
    let curr_sec = p.second();
    let curr_min = p.minute();
    let curr_hr = p.hour();

    let hr_col = p.color(252, 147, 26);
    let xy_min = draw_circles(hr_total, curr_hr, hr_col, canvasWidth - (canvasWidth - circleSpacing), canvasHeight - (canvasHeight - circleSpacing));

    let min_col = p.color(66, 202, 253);
    let xy_sec = draw_circles(min_total, curr_min, min_col, xy_min[0], xy_min[1]);

    let sec_col = p.color(176, 132, 204);
    draw_circles(sec_total, curr_sec, sec_col, xy_sec[0], xy_sec[1]);
  };

  p.windowResized = () => {
    canvasWidth = p.windowWidth * 0.7;
    canvasHeight = p.windowHeight * 0.8;
    p.resizeCanvas(canvasWidth, canvasHeight);
    updateCircleParameters();
  };

  function updateCircleParameters() {
    let maxCirclesPerRow = Math.floor(canvasWidth / (circleSize + circleSpacing)); // Add spacing between circles
    let requiredRows = Math.ceil((hr_total + min_total + sec_total) / maxCirclesPerRow);
    let requiredCanvasHeight = requiredRows * (circleSize + circleSpacing) + circleSpacing;
    if (requiredCanvasHeight > canvasHeight) {
      canvasHeight = requiredCanvasHeight;
      p.resizeCanvas(canvasWidth, canvasHeight);
    }
  }

  function draw_circles(total, curr, color, x, y) {
    for (let i = 1; i <= total; i++) {
      p.fill(i <= curr ? color : 255);
      p.ellipse(x, y, circleSize, circleSize);

      x += circleSpacing + circleSize;
      if (x + circleSize >= canvasWidth) {
        x = circleSpacing;
        y += circleSpacing + circleSize;
      }
    }

    return [x, y];
  }
};

export default sketch;
