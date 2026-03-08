let todoListeElement = document.querySelector("#shopList")

function loadTodoItems(text) {
    const todoListeElement = document.getElementById("todoListe");
    const newDiv = document.createElement("li");
    const newContent = document.createTextNode(text);

    newDiv.appendChild(newContent);
    todoListeElement.appendChild(newDiv);

    let gesamtPreis = 0;
    let gesamtAnzahl = 0;

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let localStorageValue = localStorage.getItem(key);
        let splittedArray = localStorageValue.split("|");

        let produktName = splittedArray[0];
        let preis = parseFloat(splittedArray[1]);
        let anzahl = splittedArray[2] ? parseInt(splittedArray[2]) : 1;

        const item = document.createElement("li");
        item.textContent = produktName + " - Preis: " + preis + " - Anzahl: " + anzahl;
        todoListeElement.appendChild(item);

        gesamtPreis += preis * anzahl;
        gesamtAnzahl += anzahl;
    }

    const gesamtInfo = document.createElement("p");
    gesamtInfo.textContent = "Gesamtanzahl der Produkte: " + gesamtAnzahl + ", Gesamtpreis: " + gesamtPreis.toFixed(2);
    todoListeElement.appendChild(gesamtInfo);
}
