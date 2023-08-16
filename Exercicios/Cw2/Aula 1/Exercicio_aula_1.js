var data = new Date();
//Mês
var mês = data.getMonth();
mês++;
var cor;
// var mês = 12; Controle Manual mês!
//Outono
if(mês>=3){
    cor="#c0dd5d ";
    }
//Inverno
if(mês>=6){
    cor="#9dbce3";
}
//Primavera
if(mês>=9){
    cor="#ffd6ef";
}
//Verão
if((mês==12)||(mês<=2)){
    cor="#fdf080 ";
}


document.body.style.backgroundColor=cor;