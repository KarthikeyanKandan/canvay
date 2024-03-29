window.addEventListener("load", () => {
   const canvas=document.querySelector("#canvas");
    const ctx=canvas.getContext("2d");
    
    //resize
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
    
    //variables
    let painting =false;
    function startPosition(e){
        painting=true;
        draw(e);
    }
    function finshedPosition(){
        painting=false;
        ctx.beginPath();
    }
function draw(e){
    if(!painting) return;
    ctx.lineWidth=10;
    ctx.lineCap="round";
    ctx.strokeStyle="red";
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke;
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY);
}    
 //event listeners
    canvas.addEventListener("mousedown",startPosition);
    canvas.addEventListener("mouseup",finshedPosition);
    canvas.addEventListener("mousemove",draw);
    
});