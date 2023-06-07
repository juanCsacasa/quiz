let lista = [12, 45, 23, 21, 87, 54, 32, 89, 90, 23, 65, 45,67,2,6,8,9,123,343,456]

function numeroMayor(lista) {
  //creo una variable que va ser iguañ a 0
  let mayorsito = [0];
  //se crea un bucle for para que este recorra el array
  for (let i = 0; i < lista.length; i++) {
    //hacemos una condicion la cual diga x nuemro es mayor x numero me lo sume.
    if (lista[i] > mayorsito) {
      mayorsito = lista[i];
    }
    return mayorsito;
  }
}

//este es un poco igal al de arriba
function numeroMenor(lista) {
  let menorsito = [0];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] < menorsito) {
      menorsito = lista[i];
    }
    return menorsito
  }
}

function sumatoria(lista) {
  //creamos una variable que va almacenar la suma de los numeros 
  let suma = 0;
  //hacemos un nucle for que va a recorrer la lista/array
  for (let i = 0; i < array.length; i++) {
    //se van ir añadiendo los elementos de la lista a la variable let suma
    suma += lista[i];
  }
  //me retonar la suma de los numeros 
  return suma;
}


modules.export = {
  numeroMayor:numeroMayor,
  numeroMenor:numeroMenor,
  sumatoria:sumatoria
}