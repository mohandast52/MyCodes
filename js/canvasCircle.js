const canvas = document.getElementById("circle");
console.log(canvas);
// canvas.style.background = "#212121"; // a valid CSS colour.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// getContext() method returns an object that provides methods and properties for drawing on the canvas.
const context = canvas.getContext('2d');
/*

// rectangle
context.fillStyle = "rgba(255,0,0,0.5)";
context.fillRect(100, 100, 100, 100); // takes above fillStyle
context.fillStyle = "rgba(25,45,10,0.5)";
context.fillRect(500, 100, 100, 100); // takes above fillStyle
context.fillRect(300, 500, 100, 100); // takes above fillStyle

// line
context.beginPath();
context.moveTo(50, 300); // from
context.lineTo(300, 100); // to
context.lineTo(400, 200); // to
context.strokeStyle = "#337ab7"; // color
context.stroke();

// arc/circle

for (let i = 0; i < 3; i++) {
    context.beginPath();
    // (x, y, radius, arcStart, arcEnd, counterClockWise?);
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    context.arc(x, y, 30, 0, Math.PI * 2, false);
    context.strokeStyle = "#337ab7";
    context.strokeStyle = "#337ab7";
    context.lineWidth = 20;
    context.stroke();
}

context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = "#337ab7";
context.stroke();
// animate functions calls requestAnimationFrame which again calls animates and goes forever, until we stop
*/

var mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

// whenever browers is resize
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init(); // we need circles to be created dynamically so we need this method;
});

var minimumDist = 100;
let maxRadius = 50;

var colorArray = [
    '#13B0BF', '#882FD4', '#F0677F', '#4784DA', '#F34809'
];
// object
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius; // every circle will shrink back to original radius
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.play = function () {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
    }
    this.update = function () {
        this.play();

        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        // interaction of mouse
        if ((mouse.x - this.x) < minimumDist && (mouse.x - this.x > -minimumDist) &&
            (mouse.y - this.y) < minimumDist && (mouse.y - this.y > -minimumDist)) {

            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }
    }
}

let circleObjects = [];

function init() {
    circleObjects = [];
    for (let i = 0; i < 1000; i++) {
        // (window.innerWidth - (radius * 2)) + radius :: so that circle dont go outside canvas i.e half circle
        let radius = (Math.random() * 3) + 1;

        let x = Math.random() * (window.innerWidth - (radius * 2)) + radius;
        let y = Math.random() * (window.innerHeight - (radius * 2)) + radius;
        let dx = Math.random() * 7; // velocity!
        let dy = Math.random() * 7; // velocity!
        circleObjects.push(new Circle(x, y, dx, dy, radius));
    }

}

init(); // call onload;
function animate() {
    requestAnimationFrame(animate);
    // refreshs canvas
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < circleObjects.length; i++) {
        circleObjects[i].update();
    }

}

animate();