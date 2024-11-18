// STEP ONE: dichiaro una variabile di accumulo che raccoglie le emails ad ogni giro del loop for.

const listEmails = [];
for (let i = 0; i < 10; i++) {
    // chiamata axios
    axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        // se la request è accettata entro nel then che pusha con response nella variabile di accumulo.
        .then((res) => {
            listEmails.push(res.data.response);
            console.log(listEmails);
        })
}
