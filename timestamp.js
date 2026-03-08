        let dateElement = document.getElementById("date");

        if (localStorage.getItem("firstVisit")) {
            dateElement.innerText = localStorage.getItem("firstVisit");
        } else {
            let currentDate = new Date();
            let formattedDate = currentDate.toLocaleString('de-DE', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
            localStorage.setItem("firstVisit", formattedDate.toString());
            dateElement.innerText = formattedDate.toString();
        }