
function mi_funcion2 (param1, param2) {
     contador = 0;
     resultado = 1;
   while(contador < param2) {
      resultado = resultado * param1;
      contador = contador + 1;
    }
    return resultado;
  }


  //console.log(mi_funcion(3,2));


  function mi_funcion( param1,  param2) {
     contador = 0;
     resultado = 1;
   while(contador < param2) {
      resultado = resultado * param1; 
      contador = contador + 1;
    }
    return resultado;
  }


  //console.log(mi_funcion(3,0));


  function mi_segunda_funcion(numero) {
    if (numero == 0) {
      return 1;
     } else {
      return numero * mi_segunda_funcion(numero - 1);
  }
  }

  console.log(mi_segunda_funcion(2));