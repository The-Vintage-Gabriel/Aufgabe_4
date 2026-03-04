btn = document.querySelector("button")
let mouseCount = 0;

btn.style.position = "relative";
btn.addEventListener("mouseenter", (event) => {
    console.log("mouse entered");


    let currentPixelstop = parseInt(event.target.style.top.replace("px", "")) || 0;
    let currentPixelsleft = parseInt(event.target.style.left.replace("px", "")) || 0;
    if (mouseCount < 100) {
        if (currentPixelstop > 200) {
            currentPixelstop -= Math.random() * 20 + 20;
        } else {
            if (Math.random * 2 == 0) {
                currentPixelstop -= Math.random() * 20 + 20;
            } else {
                currentPixelstop += Math.random() * 20 + 20;
            }
        }

        if (currentPixelsleft > 200) {
            currentPixelsleft -= Math.random() * 20 + 20;
        } else {
            if (Math.random * 2 == 1) {
                currentPixelsleft -= Math.random() * 20 + 20;
            } else {
                currentPixelsleft += Math.random() * 20 + 20;
            }
        }

        mouseCount++;
    }else {
        btn.textContent = "You've tryed"
    }
    event.target.style.top = currentPixelstop + "px";
    event.target.style.left = currentPixelsleft + "px";
}
)

