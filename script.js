let numeroCartas = 0
let gifsSelecionados = []
let gifClicado = []
let paresFeitos = []
let numeroJogadas = 0
let relogio = 0
let carta1
let carta2
let gifs = ["bobrossparrot.gif", "bobrossparrot.gif", "explodyparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "metalparrot.gif", "revertitparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "tripletsparrot.gif", "unicornparrot.gif", "unicornparrot.gif"]

//Verificar o numero de cartas selecionadas 
function verificarCarta() {
for(numeroCartas;numeroCartas < 4 || numeroCartas > 14|| numeroCartas % 2 !== 0;) {
    numeroCartas = prompt("Quantas cartas voce quer? (4-14)")
}
}

// criação da aleatoriedade das cartas
function sortearCarta() {
    for(let i = 0; i < numeroCartas;i++){
        gifsSelecionados.push(gifs[i])
        gifsSelecionados.sort(comparador)
    }
}
function comparador() { 
	return Math.random() - 0.5; 
}

gifsSelecionados.sort(comparador)

// Criação das cartas sobre a tela
function colocarCartas() {
    const imagem = document.querySelector(".imagens")
    const titulo = document.querySelector(".titulo")
    titulo.innerHTML += `<p class="relogio">${relogio}s</p>`
    sortearCarta()
    imagem.innerHTML += `<div class="barreira"></div>`
    for(let i = 0; i < numeroCartas;i++){
        imagem.innerHTML += `<div class="carta" data-identifier="card" onclick = virarCarta(this)>
        <img class="foto frente" data-identifier="front-face" src='Media/front.png' />
        <img class="foto verso" data-identifier="back-face" src='Media/${gifsSelecionados[i]}' />
        </div>`
    }
    intervalo = setInterval(relogioTimer, 1000)
}

verificarCarta()
colocarCartas()

// Temporizador do jogo
function relogioTimer(){
    document.querySelector(".relogio").innerHTML = relogio++ + "s"
}

// Criação da animação de virar carta
function virarCarta(divSelecionada){
    numeroJogadas++
    divSelecionada.querySelector(".verso").classList.add("virar-verso")
    divSelecionada.querySelector(".frente").classList.add("virar-frente")
    if(!document.querySelector(".carta1")){
        divSelecionada.classList.add("carta1")
        carta1 = divSelecionada
        carta1.setAttribute('onclick','')
    }
    else{
        document.querySelector(".barreira").style.display = "block";    
        divSelecionada.classList.add("carta2");
        carta2 = divSelecionada
        setTimeout(compararPar, 1000)
    }
}

// Criação do comparador de pares de carta
function compararPar(){
    if(carta1.innerHTML !== carta2.innerHTML){
        carta1.querySelector(".verso").classList.remove("virar-verso")
        carta1.querySelector(".frente").classList.remove("virar-frente")
        carta2.querySelector(".verso").classList.remove("virar-verso")
        carta2.querySelector(".frente").classList.remove("virar-frente")
        carta1.setAttribute("onclick", "virarCarta(this)")
        carta1.classList.remove("carta1")
        carta2.classList.remove("carta2")
    }
    else{
        paresFeitos.push("Feito")
        carta1.classList.remove("carta1")
        carta2.classList.remove("carta2")
        carta1.setAttribute('onclick','')
        carta2.setAttribute('onclick','')
        mostrarNumeroJogadas()
        finalizarJogo()
    }
    document.querySelector(".barreira").style.display = "none"
}

// Criação da mensagem de finalização 
function mostrarNumeroJogadas(){
    if(paresFeitos.length === (numeroCartas / 2)){
        alert(`Parabens, você ganhou em ${relogio - 1} segundos e ${numeroJogadas} jogadas!!!`)
    }
}
// Criação do reset do jogo
function finalizarJogo(){
    if(paresFeitos.length === (numeroCartas / 2)){
        clearInterval(intervalo)
        let recomecar = prompt("Quer jogar novamente ? (S/N)")
        if(recomecar === "S" || recomecar === "s"){
            document.location.reload(true)
        }
        else if(recomecar === "N" || recomecar === "n"){
            alert("Tudo bem :( Tenha um bom dia <3")
        }
        else{
            finalizarJogo()
       }
    }
}
