let numeroCartas = 0
let gifs = ["bobrossparrot.gif", "bobrossparrot.gif", "explodyparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "metalparrot.gif", "revertitparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "tripletsparrot.gif", "unicornparrot.gif", "unicornparrot.gif"]

function verificarCarta() {
for(numeroCartas;numeroCartas < 4 || numeroCartas > 14|| numeroCartas & 2 !== 0;) {
    numeroCartas = prompt("Quantas cartas voce quer? (4-14)")
}
}

function colocarCartas() {
    const imagem = document.querySelector(".imagens")
    for(let i = 0; i < numeroCartas;i++){
        imagem.innerHTML += `<div class="carta n${i}" onclick= virarCarta(this)>
        <img class="foto n${i} frente" src='Media/front.png' />
        <img class="foto n${i}  verso" src='Media/${gifs[i]}' />
        </div>`
    }
}

function virarCarta(divSelecionada){
    divSelecionada.querySelector(".frente").style.transform = "rotateY(-180deg)"
    divSelecionada.querySelector(".verso").style.transform = "rotateY(0deg)"
}

verificarCarta()
colocarCartas()