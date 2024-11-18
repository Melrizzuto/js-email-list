// STEP 1: Seleziono il bottone dal DOM
const btnRequest = document.querySelector("button");

// STEP 2: Aggiungo un event listener per il click del bottone
btnRequest.addEventListener("click", () => {
    // STEP 3: Dichiaro una variabile di accumulo per raccogliere le email
    const listEmails = [];

    // STEP 4: Seleziona l'elemento ul dal DOM
    let ul = document.querySelector("ul");

    // STEP 5: Inizio il ciclo per effettuare 10 chiamate Axios
    for (let i = 0; i < 10; i++) {
        // STEP 6: Chiamata axios per ottenere un'email casuale
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((res) => {
                // STEP 7: Aggiungo la risposta (email) all'array listEmails
                listEmails.push(res.data.response);

                // Stampo l'array aggiornato di email nella console
                console.log(listEmails);

                // STEP 8: Controllo se l'array ha raggiunto 10 email
                if (listEmails.length === 10) {
                    // STEP 9: Creo un template che conterrà la lista delle email
                    let template = "";
                    listEmails.forEach(element => {
                        // STEP 10: Aggiungo ogni email come elemento <li> alla lista template
                        template += `<li>${element}</li>`;
                    });

                    // STEP 11: Inserisco il template generato nell'elemento ul del DOM
                    ul.innerHTML = template;
                }
            })
            .catch((error) => {
                // STEP 12: Gestisco eventuali errori durante la richiesta
                console.error("Errore nella richiesta:", error);
            });
    }
    btnRequest.innerHTML = "Rigenera"
});

