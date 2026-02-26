btn = document.querySelector("button")

btn.style.position = "relative";    
btn.addEventListener("mouseenter", (event) => {
    console.log("mouse entered");
    
    let currentPixelstop = parseInt(event.target.style.top.replace("px", "")) || 0;
    let currentPixelsleft = parseInt(event.target.style.left.replace("px", "")) || 0;
    currentPixelstop += 20;
    currentPixelsleft += 20;
    event.target.style.top = currentPixelstop + "px";
    event.target.style.left = currentPixelsleft + "px";
    }
)

