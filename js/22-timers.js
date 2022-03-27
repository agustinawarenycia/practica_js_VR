

    window.addEventListener('load', function(){
        // Timers
        //setInterval, despues de determinado tiempo ejecuta una acction
         var tiempo = setInterval( () =>{
            console.log("Set interval ejecutado");

            var encabezado = document.querySelector ("h1");
            if(encabezado.style.fontSize == "58px"){
                 encabezado.style.fontSize = "38px";
            }else{
                encabezado.style.fontSize = "58px";
}
            //document.querySelector("h1").style.fontSize = "58px";
         }, 3000);

         //Se ejecuta una vez despues de un determinado tiempo
         var tiempo2 = this.setTimeout( ()=>{
            var encabezado = document.querySelector ("h1");
            if(encabezado.style.fontSize == "58px"){
                 encabezado.style.fontSize = "38px";
            }else{
                encabezado.style.fontSize = "58px";
}
            //document.querySelector("h1").style.fontSize = "58px";
         }, 3000);


         //Agrega un listener para detener el interval
         var stop = document.querySelector("#stop");
         stop.addEventListener("click", function(){
         alert("Has parado el intervalo en bucle");
         clearInterval(tiempo);
                                                });

     });
    