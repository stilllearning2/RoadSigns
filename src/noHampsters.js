/*jshint esversion: 6 */

function noHampsters() {
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 300;

    ctx.save();
    // set drawing properties for the sign
    ctx.lineWidth = 20; // nice wide line
    ctx.lineJoin = "round"; // rounded corners
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";

    // add hampster image
    let hampster = new Image();
    hampster.src = "../images/hampster.jpeg";
    hampster.onload = function(){
        ctx.drawImage(hampster, 90, 70);
    
        // red circle
        ctx.beginPath();
        ctx.arc(150, 130, 100, 0, 2*Math.PI, false);
        ctx.closePath();
        ctx.stroke();

        // red line
        ctx.beginPath();
        ctx.moveTo(90, 60);
        ctx.lineTo(210, 200);
        ctx.closePath();
        ctx.stroke();

        // text
        ctx.font = "30px bold Arial";
        ctx.fillText("NO HAMPSTERS!", 30, 280); 
    };       
}    

noHampsters();