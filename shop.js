let shopelement1 = document.querySelector("#add1");
let shopelement2 = document.querySelector("#add2");

function storeitem1() {
    localStorage.setItem("item_" + localStorage.length, "Apfelsaft|1.20|1");
    loadTodoItems();
}

function storeitem2() {
    localStorage.setItem("item_" + localStorage.length, "Apfelsaft|1.60|1");
    loadTodoItems();
}


shopelement1.addEventListener("click", storeitem1);
shopelement2.addEventListener("click", storeitem2);
