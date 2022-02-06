let numeroCartas = 0
let gifsSelecionados = []
let gifClicado = []
let carta1
let carta2
let gifs = ["bobrossparrot.gif", "bobrossparrot.gif", "explodyparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "metalparrot.gif", "revertitparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "tripletsparrot.gif", "unicornparrot.gif", "unicornparrot.gif"]

function verificarCarta() {
for(numeroCartas;numeroCartas < 4 || numeroCartas > 14|| numeroCartas & 2 !== 0;) {
    numeroCartas = prompt("Quantas cartas voce quer? (4-14)")
}
}

function sortearCarta() {
    for(let i = 0; i < numeroCartas;i++){
        gifsSelecionados.push(gifs[i])
        gifsSelecionados.sort(comparador)
    }
}

function colocarCartas() {
    const imagem = document.querySelector(".imagens")
    sortearCarta()
    for(let i = 0; i < numeroCartas;i++){
        imagem.innerHTML += `<div class="carta" onclick = virarCarta(this)>
        <img class="foto frente" src='Media/front.png' />
        <img class="foto verso" src='Media/${gifsSelecionados[i]}' />
        </div>`
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

gifsSelecionados.sort(comparador)

verificarCarta()
colocarCartas()

function virarCarta(divSelecionada){
    divSelecionada.querySelector(".verso").classList.add("virar-verso")
    divSelecionada.querySelector(".frente").classList.add("virar-frente")
    if(!document.querySelector(".carta1")){
        divSelecionada.classList.add("carta1")
        carta1 = divSelecionada
        carta1.setAttribute('onclick','')
    }
    else{
    divSelecionada.classList.add("carta2");
    carta2 = divSelecionada
    setTimeout(compararPar, 1000)
    }
}

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
        carta1.classList.remove("carta1")
        carta2.classList.remove("carta2")
        carta1.setAttribute('onclick','')
        carta2.setAttribute('onclick','')
    }
}

