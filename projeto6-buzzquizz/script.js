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


// Parte Diego Koyama
const quizz = [];
const quizzTitulo = [];
let localNPerguntasQuizz;
let localQuizzTitulo;
const containerCriacao1 = document.querySelector(".container-criacao1");
const containerCriacao2 = document.querySelector(".container-criacao2");
let localRespostaVUrl;
let resultadoHexa;
let localTextoPergunta;
let localCorFundo;
let localRespostaCorreta;
let localUrlImgCorreta;
let localResposaIncorreta1;
let localUrlImgIncorreta1;
let localResposaIncorreta2;
let localUrlImgIncorreta2;
let localResposaIncorreta3;
let localUrlImgIncorreta3;


// Tela 3.1 - Informações básicas do quizz


function verificarUrl(string){
    try{
        let urlI = new URL(string);
        respostaVUrl = true;
    } catch(err){
        respostaVUrl = false;
    }
}


// veruficacao e transicao para a tela 3.2
document.querySelector(".botao-proceguir-criar-perguntas").addEventListener("click", () => {

    let tituloQuizz = document.querySelector(".titulo").value;
    let urlQuizz = document.querySelector(".urlImg").value;
    let nPerguntasQuizz = document.querySelector(".nQuizz").value;
    let niveisQuizz = document.querySelector(".niveis").value;
    verificarUrl(urlQuizz);
    if(tituloQuizz.length >= 20 && tituloQuizz.length <= 65 && respostaVUrl == true && nPerguntasQuizz >= 3 && niveisQuizz >= 2){
        quizzTitulo.push({title: tituloQuizz, image: urlQuizz, questions: []});
        console.log(quizzTitulo);
        localStorage.setItem("quizzTitulo", quizzTitulo);
        localStorage.setItem("nPerguntasQuizz", nPerguntasQuizz);
        localQuizzTitulo = localStorage.quizzTitulo;
        localNPerguntasQuizz = localStorage.nPerguntasQuizz;
        containerCriacao1.classList.toggle("esconder");
        containerCriacao2.classList.toggle("esconder");

        nPerguntas();
    }

});


// Tela 3.2 - Perguntas do quizz

function nPerguntas(){
    const pergunta = document.querySelector(".info-Pergunta");
    pergunta.innerHTML = "";   
    for(i = 0; i < localNPerguntasQuizz; i++){
        let cont = i+1;
        if(cont===1){
            pergunta.innerHTML += `
            <li class="entrada-infop1">
        
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
            <bottom class="expandir" onclick="expandirP(this)" ><ion-icon name="create-outline"></ion-icon></bottom>
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
            <bottom onclick="expandirP(this)" class="expandir"><ion-icon name="create-outline"></ion-icon></bottom>
            </li>
            `
        } 
        
    }

    
}

function expandirP(elemento){
    const listaPerguntas = document.querySelectorAll(".entrada-info-reduzida");
    const listaPerguntas1 = document.querySelectorAll(".entrada-infop1");
    let pai = elemento.parentNode;
    let arrayPerguntas = Array.from(listaPerguntas);
    let arrayPerguntas1 = Array.from(listaPerguntas1);
    pai.classList.toggle("esconder");
    let index = arrayPerguntas.indexOf(pai);
    arrayPerguntas1[index].classList.remove("esconder");
    for(i=0;i<arrayPerguntas1.length;i++){
        if(arrayPerguntas1[i] !== arrayPerguntas1[index]){
            arrayPerguntas1[i].classList.add("esconder");
        }
    }
    for(j=0;j<arrayPerguntas.length;j++){
        if(arrayPerguntas[j] !== arrayPerguntas[index]){
            arrayPerguntas[j].classList.remove("esconder");
        }
    }
    console.log(arrayPerguntas.indexOf(pai));  
}

// verificacao e transicao para a tela 3.3
document.querySelector(".botao-criar-niveis").addEventListener("click", () => {
    let textoPergunta = document.querySelector(".texto-pergunta").value;
    let respostaCorreta = document.querySelector(".resposa-correta").value;
    let urlImgCorreta = document.querySelector(".url-img").value;
    let resposaIncorreta1 = document.querySelector(".resposa-incorreta1").value;
    let urlImgIncorreta1 = document.querySelector(".url-img-incorreta1").value;
    let resposaIncorreta2 = document.querySelector(".resposa-incorreta2").value;
    let urlImgIncorreta2 = document.querySelector(".url-img-incorreta2").value;
    let resposaIncorreta3 = document.querySelector(".resposa-incorreta3").value;
    let urlImgIncorreta3 = document.querySelector(".url-img-incorreta3").value;
    let contador = 0;
    let contador1 = 0;
    verificarHexadecimal();
    if(respostaCorreta != ""){
        verificarUrl(urlImgCorreta);
        if(respostaVUrl === true){
            contador1++;
        }
    }
    if(resposaIncorreta1 != ""){
       verificarUrl(urlImgIncorreta1);
       if( respostaVUrl === true){
        contador++;
       }
    }
    if(resposaIncorreta2 != ""){
        verificarUrl(urlImgIncorreta2);
        if( respostaVUrl === true){
            contador++;
           }
    }
    if(resposaIncorreta3 != ""){
        verificarUrl(urlImgIncorreta3);
        if( respostaVUrl === true){
            contador++;
           }
    }
    if(contador1 == 1 && resultadoHexa != false && contador >= 1){
        alert("oi");
    }
})

function verificarHexadecimal(string){
    let corFundo = document.querySelector(".cor-fundo").value;
    try {
        let RegExp = /^#[0-9A-F]{6}$/i;
        resultadoHexa = RegExp.test(corFundo);
    } catch (err) {
        resultadoHexa = false;
}
}