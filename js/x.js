import icons from "./icons.js";
export default function x(e){
    e.innerHTML = "<canvas width='60%' height='60%'></canvas>";
    const canvas = e.children[0];
    let ctx = canvas.getContext("2d");
    let width = canvas.clientWidth;
    ctx.strokeStyle = icons.strokeColor;
    ctx.lineWidth = icons.strokeWidth;
    let x = 0;
    let y = 0;
    let x2 = width;
    let y2 = 0;
    let drawX = setInterval(() => {
        if(x!=width){
            ctx.moveTo(0,0);
            ctx.lineTo(x+=2,y+=2);
            ctx.stroke();
        }else{
            ctx.moveTo(width,0);
            ctx.lineTo(x2-=2,y2+=2);
            ctx.stroke();
            if(x2 == 0){
                clearInterval(drawX);
            }
        }
    },icons.time)
}