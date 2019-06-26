window.addEventListener("load", () => {
   const canvas=document.querySelector("#canvas");
    const ctx=canvas.getContext("2d");
    
    //resize
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
    
    ctx.strokeRect(100,100,200,500);
    ctx.lineWidth
    ctx.strokeRect(200,200,200,500);
});