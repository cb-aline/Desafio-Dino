let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let cacto = document.querySelector("#cacto");
let fundo = document.querySelector("#fundo");
let pontos = document.querySelector("#pontos");
let gameOver = document.querySelector("#game-over");

// variáveis de pontuação
let interval = null;
let playerPontos = 0;


//Função de pontuação
let pontosCounter = () => {
    playerPontos++;
    pontos.innerHTML = `pontos <b>${playerPontos}</b>`;
}


//Início do jogo
window.addEventListener("keydown", (start) => {
    //    console.log(start);
    if (start.code == "Space") {
        gameOver.style.display = "none";
        cacto.classList.add("cactoActive");
        fundo.firstElementChild.style.animation = "fundoAnimate 1.5s linear infinite";

        //pontuação
        let playerPontos = 0;
        interval = setInterval(pontosCounter, 200);
    }
});


//Dino pulando
window.addEventListener("keydown", (e) => {
    

    if (e.key == "ArrowUp")
        if (dino.classList != "dinoActive") {
            dino.classList.add("dinoActive");

            // remove class
            setTimeout(() => {
                dino.classList.remove("dinoActive");
            }, 500);
        }
});

//'Game Over' se Dino bater no cacto
let result = setInterval(() => {
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    

    let cactoLeft = parseInt(getComputedStyle(cacto).getPropertyValue("left"));
  

    if (dinoBottom <= 90 && cactoLeft >= 20 && cactoLeft <= 145) {

        document.body.innerHTML = "<h1>GAME OVER!</h1>";
          
    
        gameOver.style.display = "cacto";
        cacto.classList.remove("cactoActive");
        fundo.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerPontos = 0;
    }
}, 10);
