

var numero = 100;

for(var i=0;i<numero;i++){
    console.log("Numero: "+i);
}


var miArray = [ 2, 4, 6, 8, 10 ];
miArray.forEach( function(valor, indice, array) {
    console.log("En el índice " + indice + " hay este valor: " + valor);
});