// STEP ONE: Faccio partire la chiamata come una stringa.

axios.get("https://flynn.boolean.careers/exercises/api/random/mail")

    //STEP TWO: se la request ha successo entra nel then con una funziona che riceve la risposta.

    .then((res) => {
        //STEP THREE: Stampa in console la mail casuale
        console.log(res.data.response);

    })