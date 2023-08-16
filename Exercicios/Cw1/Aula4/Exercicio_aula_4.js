var hora = 9;
var minutos = 15;
var entrevistas = 0;
const saida = 17;
//entrevistados
var lista=["José da Silva",
"Antônio de Sá",
"Felipe Augusto",
"Carla Moreira",
"Pedro Malta",
"Maria Sousa",
"Marta da Silva",
"Fausto Augusto",
"Silvio Sávio",
"Maísa Silva",
"Lucas Lopes",
"Zenildo Santos",
"Bruno Lucas",
"Luana Melo",
"Felipe Santos",
"Flávio Miguel",
"Lauro Maria",
"Juca dos Santos",
"Luciana Carla",
"Felipe Silva",
"André Manuel",
"Pedro Parker",
"Ana Maria",
"Thiago Melo"]


//organizou a lista.
lista.sort();

for(h=hora; h < saida; h =h+1){
    if((h == 12) || (h==13)){
        continue;
    }
    for(m = 0; m<60; m = m+minutos){
        entrevistas++;
        if(m==0){
            console.log(h+":"+m+0,
            "=>", lista[entrevistas - 1])
        }
        else{
        console.log(h+":"+m,
         "=>", lista[entrevistas - 1])
    }
    }
}

