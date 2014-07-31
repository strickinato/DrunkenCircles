(function () {
  var Circles = window.Circles = (window.Circles || {});

  var Circle = Circles.Circle = function Circle (centerX, centerY, radius, color) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
  };

  Circle.MAX_RADIUS = 25;

  Circle.randomCircle = function (maxX, maxY) {
    return new Circle(
      maxX * Math.random(),
      maxY * Math.random(),
      Circle.MAX_RADIUS * Math.random(),
      Circle.randomColor()
    );
  };

  var HEX_DIGITS = "0123456789ABCDEF"
  Circle.randomColor = function () {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += HEX_DIGITS[Math.floor((Math.random() * 16))];
    }

    return color;
  };

  Circle.prototype.moveRandom = function (maxX, maxY) {
    var dx = (Math.random() * 2) - 1;
    var dy = (Math.random() * 2) - 1;

    this.centerX = Math.abs((this.centerX + (dx * this.radius)) % maxX);
    this.centerY = Math.abs((this.centerY + (dy * this.radius)) % maxY);
  };

  Circle.prototype.render = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.centerX,
      this.centerY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };
})();
