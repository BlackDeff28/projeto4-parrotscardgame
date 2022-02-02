let numeroCartas = 0

function verificarCarta() {
for(numeroCartas;numeroCartas < 4 || numeroCartas > 14;) {
    numeroCartas = prompt("Quantas cartas voce quer? (4-14)")
}
}


function colocarCartas() {
    const imagem = document.querySelector(".imagens")
    for(let i = 0; i < numeroCartas;i++){
        imagem.innerHTML += "<img src='Media/front.png'>"
    }
}

verificarCarta()
colocarCartas()