//abre o canvas
var canvas = document.getElementById("carregamento");
var ctx = canvas.getContext("2d");
//declarar as var
var x = 0;
var y = 0;
var largura = 0;
var altura = 10;
var fator = 50;
var maximo = 1280;
//mudando a cor do objeto
ctx.fillStyle = "#4169E1";

function animacao (){
    ctx.fillRect(x, y, largura= largura + fator, altura);
    if(largura > maximo){
        clearInterval(atualiza); 
    }
}
//tempo em que o objeto se move
var atualiza = setInterval(animacao, 10); 