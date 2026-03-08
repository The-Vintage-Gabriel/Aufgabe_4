let shopelement1 = document.querySelector("add1")
let shopelement2 = document.querySelector("add2")

function storeitem1() {
    localStorage.setItem(localStorage.length, "Apfelsaft - 1.20€")
}

function storeitem2() {
    localStorage.setItem(localStorage.length, "Apfelsaft - 1.20€")
}

shopelement1.addEventListener("click", storeitem1)
shopelement1.addEventListener("click", storeitem2)