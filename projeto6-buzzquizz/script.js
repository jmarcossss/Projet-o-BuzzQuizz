/*
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
/*}

pegarQuizzesDaAPI();
*/

// Parte Diego Koyama

const containerCriacao1 = document.querySelector(".container-criacao1");
const containerCriacao2 = document.querySelector(".container-criacao2");
let respostaVUrl;

// Tela 3.1 - Informações básicas do quizz


function verificarUrl(string){
    try{
        let urlI = new URL(string);
        respostaVUrl = true;
    } catch(err){
        respostaVUrl = false;
    }
}

function verificarIBasicas(){
    if(tituloQuizz.length >= 20 && tituloQuizz.length <= 65){
        
    }
}

document.querySelector(".botao-proceguir-criar-perguntas").addEventListener("click", () => {

    let tituloQuizz = document.querySelector(".titulo").value;
    let urlQuizz = document.querySelector(".urlImg").value;
    let nPerguntasQuizz = document.querySelector(".nQuizz").value;
    let niveisQuizz = document.querySelector(".niveis").value;
    verificarUrl(urlQuizz);
    if(tituloQuizz.length >= 20 && tituloQuizz.length <= 65 && respostaVUrl == true && nPerguntasQuizz >= 3 && niveisQuizz >= 2){
        containerCriacao1.classList.toggle("esconder");
        containerCriacao2.classList.toggle("esconder");
    }

});


// Tela 3.2 - Perguntas do quizz
nPerguntas();

function nPerguntas(){
    const pergunta = document.querySelector(".info-Pergunta");
    pergunta.innerHTML = ""; 
    let nPerguntasQuizz = 3;   
    for(i = 0; i < nPerguntasQuizz; i++){
        let cont = i+1;
        if(cont===1){
            pergunta.innerHTML += `
            <li class="entrada-infop1 ${cont}">
        
                <p>Pergunta ${cont}</p>
                <input type="text" class="texto-pergunta container-input" placeholder="Texto da pergunta">
                <input type="text" class="cor-fundo container-input" placeholder="Cor de fundo da pergunta">
                <p>Resposta correta</p>
                <input type="text" class="resposa-correta container-input" placeholder="Resposta correta">
                <input type="text" class="url-img container-input" placeholder="URL da imagem">
                <p>Respostas incorretas</p>
                <input type="text" class="resposa-incorreta1 container-input" placeholder="Resposta incorreta 1">
                <input type="text" class="url-img-incorreta1 container-input" placeholder="URL da imagem 1">
                <input type="text" class="resposa-incorreta2 container-input" placeholder="Resposta incorreta 2">
                <input type="text" class="url-img-incorreta2 container-input" placeholder="URL da imagem 2">
                <input type="text" class="resposa-incorreta3 container-input" placeholder="Resposta incorreta 3">
                <input type="text" class="url-img-incorreta3 container-input" placeholder="URL da imagem 3">

            </li>`
        
            pergunta.innerHTML += `
            <li class="entrada-info-reduzida esconder">
            <p>Pergunta ${cont}</p>
            <bottom class="expandir"><ion-icon name="create-outline"></ion-icon></bottom>
            </li>
            `

        }
        else{
            pergunta.innerHTML += `
            <li class="entrada-infop1 esconder">
        
                <p>Pergunta ${cont}</p>
                <input type="text" class="texto-pergunta container-input" placeholder="Texto da pergunta">
                <input type="text" class="cor-fundo container-input" placeholder="Cor de fundo da pergunta">
                <p>Resposta correta</p>
                <input type="text" class="resposa-correta container-input" placeholder="Resposta correta">
                <input type="text" class="url-img container-input" placeholder="URL da imagem">
                <p>Respostas incorretas</p>
                <input type="text" class="resposa-incorreta1 container-input" placeholder="Resposta incorreta 1">
                <input type="text" class="url-img-incorreta1 container-input" placeholder="URL da imagem 1">
                <input type="text" class="resposa-incorreta2 container-input" placeholder="Resposta incorreta 2">
                <input type="text" class="url-img-incorreta2 container-input" placeholder="URL da imagem 2">
                <input type="text" class="resposa-incorreta3 container-input" placeholder="Resposta incorreta 3">
                <input type="text" class="url-img-incorreta3 container-input" placeholder="URL da imagem 3">

            </li>`

            pergunta.innerHTML += `
            <li class="entrada-info-reduzida">
            <p>Pergunta ${cont}</p>
            <bottom class="expandir"><ion-icon name="create-outline"></ion-icon></bottom>
            </li>
            `
        } 
        
    }

}
