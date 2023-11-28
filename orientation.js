window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(evt) {
    var alpha = evt.alpha;
    var beta = evt.beta;
    var gamma = evt.gamma;

    document.getElementById("a").innerHTML = "Alpha = " + alpha;
    document.getElementById("b").innerHTML = "Beta = " + beta;
    document.getElementById("c").innerHTML = "Gamma = " + gamma;

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var center = { x: canvas.width / 2, y: canvas.height / 2 };
    var sideLength = 50;

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Translate to the center of the canvas
    context.translate(center.x, center.y);

    // Rotate based on the gamma angle
    context.rotate(gamma * (Math.PI / 180));

    // Draw a rectangle
    context.beginPath();
    context.rect(-sideLength / 2, -sideLength / 2, sideLength, sideLength);
    context.stroke();
}

