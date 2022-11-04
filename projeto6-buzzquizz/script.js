const url = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";
let quizzesTotais = [];

//Função que vai fazer a requsição dos quizzes lá da API
function pegarQuizzesDaAPI() {
    const promise = axios.get(`${url}`);
    promise.then(quizzesNaTela);
    promise.catch("Erro ao carregar os quizzes");
}

// Função que vai renderizar os quizzes lá da API
function quizzesNaTela(valor) {
    quizzesTotais = valor.data;
    const quizzNaTela = document.querySelector(".quizzes");
    quizzNaTela.innerHTML = "";
    for (let i = 0; i < quizzesTotais.length; i++) {
        quizzNaTela.innerHTML += `
        <div class="formatoDoQuizz" style="background:
            linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 60%, #000000 100%),
            url(${quizzesTotais[i].image});">
                <p>${quizzesTotais[i].title}</p>
            </div>`;   
      }
      /*let elementoQueQueroQueApareca = document.querySelector('quizzNaTela').lastElementChild;
      console.log(quizzesTotais);*/
}

pegarQuizzesDaAPI();
