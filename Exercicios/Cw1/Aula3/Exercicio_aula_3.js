var hora = 9
var minutos = 15
var total_entrevistas = 0
const saida = 17

for(i = hora; i < saida; i=i+1){
    if((i == 12)||(i==13)){
        continue
    }
    for(j = 0; j < 60; j = j+minutos){
        total_entrevistas++;      
        if(j == 0){
            console.log("Entrevista #",
                total_entrevistas,"=>", i+":"+j+"0")
        }
        else{
            console.log("Entrevista #", 
               total_entrevistas,"=>", i+":"+j)
        }
    }
}