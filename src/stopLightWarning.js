/*jshint esversion: 6 */

function donotenter() {
            let canvas = document.querySelector("canvas");
            let ctx = canvas.getContext("2d");
            canvas.width = 400;
            canvas.height = 400;

            ctx.save(); // save previous display state
            // set drawing properties for the sign
            ctx.lineWidth = 10;      // nice wide line
            ctx.lineJoin = "round";  // rounded corners
            ctx.strokeStyle = "black";
            ctx.fillStyle = "gold";

            // square with border
            //ctx.translate( 0, 150 );
            //ctx.rotate(-45 * Math.PI / 180);
            ctx.lineJoin = "round";
            ctx.beginPath();
            ctx.moveTo(47, 153);
            ctx.lineTo(175, 25);
            ctx.lineTo(300, 150);
            ctx.lineTo(175, 275);
            ctx.lineTo(47, 147);
            ctx.stroke();
            ctx.fill();
            //ctx.fillRect(50, 50, 175, 175);
            ctx.save();

            //ctx.strokeRect(50, 50, 175, 175)
            //ctx.rotate(-45 * Math.PI / 180);
           // ctx.save;
            
            ctx.setTransform(1,0,0,1,0,0);

            // draw rectangle
            ctx.fillStyle = "black";
            ctx.fillRect(150, 75, 50, 150);

            // draw red light
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.save();
            ctx.arc(175, 105, 20, 0, 2*Math.PI, false);
            ctx.fill();

            // draw yellow light
            ctx.beginPath();
            ctx.fillStyle = "yellow";
            ctx.arc(175, 150, 20, 0, 2*Math.PI, false);
            ctx.fill();


            // draw green light
            ctx.beginPath();
            ctx.fillStyle = "green";
            ctx.save();
            ctx.arc(175, 195, 20, 0, 2*Math.PI, false);
            ctx.fill();
        }

        donotenter();