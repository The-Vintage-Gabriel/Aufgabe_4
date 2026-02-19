btn = document.querySelector("button")

btn.style.position = "relative";    
btn.addEventListener("mouseenter", (event) => {
    console.log("mouse entered");
    
    let currentPixels = parseInt(event.target.style.top.replace("px", "")) || 0;
    currentPixels += 20;
    event.target.style.top = currentPixels + "px";
    }
)

