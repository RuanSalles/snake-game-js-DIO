//Criação do Canvas (Background e elementos)
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8*box,
    y: 8*box

}

let direcao = "direita";

//Criação do Background
function criarBG() {
    context.fillStyle = "blue";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

//Criação da cobrinha
function criarCobrinha() {
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "red";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener('keydown', update);

//Implementação das movimentações
function update(event) {
    
    if(event.keyCode == 37 && direcao != "direita") direcao = "esquerda";
    if(event.keyCode == 38 && direcao != "baixo") direcao = "cima";
    if(event.keyCode == 39 && direcao != "esquerda") direcao = "direita";
    if(event.keyCode == 40 && direcao != "cima") direcao = "baixo"
    
}

//Função de iniciar o jogo
function iniciarJogo() {

    if(snake[0].x > 15 * box && direcao == "direita") snake[0].x = 0;
    if(snake[0].x < 0 && direcao == "esquerda") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direcao == "baixo") snake[0].y = 0;
    if(snake[0].y < 0 && direcao == "cima") snake[0].y = 16 * box;

    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //Criação das direções da cobrinha
    if(direcao == "direita") snakeX += box;
    if(direcao  == "esquerda") snakeX -= box;
    if(direcao  == "cima") snakeY -= box;
    if(direcao == "baixo") snakeY += box;

    snake.pop();

    //Criacao de novas cabeças
    let novaCabeca = {
        x: snakeX,
        y:snakeY
    }

    snake.unshift(novaCabeca);

}

//Função de intervalo para início e continuidade do jogo
let jogo = setInterval(iniciarJogo, 100);

