// STEP 1: dichiaro una variabile di accumulo che raccoglie le emails ad ogni giro del loop for.
const listEmails = [];

// STEP 2: Seleziona l'elemento ul dal DOM fuori dal ciclo
let ul = document.querySelector("ul");

// STEP 3: Inizio il ciclo for per effettuare 10 chiamate Axios
for (let i = 0; i < 10; i++) {
    // STEP 4: Chiamata axios per ottenere un'email casuale
    axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")

        // STEP 5: Se la request è accettata allora entro nel then che pusha la response nella variabile di accumulo
        .then((res) => {
            // Aggiungo la risposta (email) all'array listEmails
            listEmails.push(res.data.response);

            // Stampo l'array aggiornato di email nella console
            console.log(listEmails);

            // STEP 6: Controllo se l'array ha raggiunto 10 email
            if (listEmails.length === 10) {
                // STEP 7: Creo una variabile template che conterrà la lista delle email
                let template = "";
                listEmails.forEach(element => {
                    // STEP 8: Aggiungo ogni email come elemento <li> alla lista template
                    template += `<li>${element}</li>`;
                });

                // STEP 9: Inserisco il template generato nell'elemento ul del DOM
                ul.innerHTML = template;
            }
        })
        .catch((error) => {
            // STEP 10: Gestisco eventuali errori durante la richiesta
            console.error("Errore nella richiesta:", error);
        });
}