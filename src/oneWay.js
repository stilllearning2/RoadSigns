/*jshint esversion: 6 */

function donotenter() {
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 500;

    ctx.save(); // save previous display state
    // set drawing properties for the sign
    ctx.lineWidth = 32; // nice wide line
    ctx.lineJoin = "miter"; // rounded corners
    ctx.strokeStyle = "white";
    ctx.fillStyle = "#00aeff";

    // blue rectangle
    ctx.fillRect(25, 25, 250, 300);

    // white inner line
    ctx.lineWidth = 3;
    ctx.strokeRect(35, 35, 230, 280);

    // white triangle
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(150, 60);
    ctx.lineTo(80, 150);
    ctx.lineTo(220, 150);
    ctx.lineTo(150, 60);
    ctx.closePath();
    ctx.fill();

    // white line
    ctx.lineWidth = 60;
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(150, 285);
    ctx.closePath();
    ctx.stroke();


    // text
    ctx.fillStyle = "#00aeff";
    ctx.font = "50px bold Arial";
    ctx.fillText("ONE WAY", 40, 380);
}

donotenter();