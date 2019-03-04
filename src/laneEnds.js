/*jshint esversion: 6 */

function laneEnds() {
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 300;

    ctx.save(); // save previous display state
    // set drawing properties for the sign
    ctx.lineWidth = 40; // nice wide line
    ctx.lineJoin = "round"; // rounded corners
    ctx.strokeStyle = "red";
    ctx.fillStyle = "white";
    ctx.save();

    // red triangle
    ctx.beginPath();
    ctx.moveTo(162.5, 50);
    ctx.lineTo(50, 225);
    ctx.lineTo(275, 225);
    ctx.lineTo(162.5, 50);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    // black lines
    // right
    ctx.lineWidth = 20;
    ctx.lineJoin = "miter";
    ctx.strokeStyle = "black";
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(177.5, 100);
    ctx.lineTo(177.5, 210);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(145, 100);
    ctx.lineTo(145, 140);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(120, 170);
    ctx.lineTo(120, 210);
    ctx.closePath();
    ctx.stroke();

    ctx.lineJoin = "miter";
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(146, 134);
    ctx.lineTo(119, 175);
    ctx.closePath();
    ctx.stroke();
}
laneEnds();