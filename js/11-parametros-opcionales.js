// Defino la función
function calculadora(numero1, numero2, mostrar = false){
    // Conjunto de instrucciones a ejecutar
     if(mostrar == false){
        console.log("Suma: "+ (numero1+numero2));
        console.log("Resta: " + (numero1-numero2));
        console.log("Multiplicacion: " + (numerol*numero2));
        console.log("División: "+ (numero1/numero2));
        console.log("***********************");
     }else{
        document.write("Suma: "+ (numerol + numero2)+"<br/>");
        document.write("Resta: " + (numero1-numero2)+"<br/>");
        document.write("Multiplicacion: " + (numerol*numero2)+"<br/>");
        document.write("División: " + (numero1/numero2)+"<br/>");
        document.write("*****************************");
     }
    }


    //Invocar o llamar la funcion

    calculadora(3,4);
    calculadora(4,5, true);