import icons from "./icons.js";
export default function o(e){
    e.innerHTML = "<canvas width='60%' height='60%'></canvas>";
    const canvas = e.children[0];
    let ctx = canvas.getContext("2d");
    let width = canvas.clientWidth;
    ctx.strokeStyle = icons.strokeColor;
    ctx.lineWidth = icons.strokeWidth;
    let center = width / 2;
    let x = 0.1;
    let drawO = setInterval(() => {
        ctx.beginPath();
        ctx.arc(center, center, 25, 0, x);
        ctx.stroke();
        if(x > 2 * Math.PI){
            clearInterval(drawO);
        }
        x += 0.2;
    },icons.time)
}