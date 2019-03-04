/*jshint esversion: 6 */

function donotenter() {
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 300;

    ctx.save(); // save previous display state
    // set drawing properties for the sign
    ctx.lineWidth = 32;      // nice wide line
    ctx.lineJoin = "round";  // rounded corners
    ctx.strokeStyle = "white";
    ctx.fillStyle = "red";

    // red circle
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 100, 0, 2*Math.PI, false);
    ctx.fill();

    // white line
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(65, 150);
    ctx.lineTo(235, 150);
    ctx.stroke();

    // text
    ctx.fillStyle = "white";
    ctx.font = "30px bold Verdana";
    ctx.save();
    
    ctx.fillText("DO NOT", 95, 120);
    ctx.fillText("ENTER", 100, 200);
}

donotenter();