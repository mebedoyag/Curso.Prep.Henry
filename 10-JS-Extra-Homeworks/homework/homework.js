// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  let matrizResultado = [];

  for (let prop in objeto) {
    
    matrizResultado.push([prop, objeto[prop]]);
  }

  return matrizResultado;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  let objetoConteo = {};

  for (let i = 0; i < string.length; i++) {

    if (string[i] in objetoConteo)
      objetoConteo[ string[i] ]++;
    else objetoConteo[ string[i] ] = 1;
  }

  return objetoConteo;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let letrasMay = '';
  let letrasMin = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase())
      letrasMay += s[i];
    else letrasMin += s[i];
  }

  return letrasMay + letrasMin;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  let strToArr = str.split(' ');
  let strResultado = '';

  for (let i = 0; i < strToArr.length; i++) {
    
    let palabraActual = strToArr[i];
    let palabraTemp = '';

    for (let j = (palabraActual.length - 1); j >= 0; j--) {
      palabraTemp += palabraActual[j];
    }
    strResultado = strResultado + palabraTemp + ' ';
  }

  return strResultado.trim();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  let numeroComoStr = numero.toString();
  let longitud = numeroComoStr.length;
  let numeroComoStrAlreves = '';

  for (let i = longitud - 1; i >= 0; i--) {
    numeroComoStrAlreves += numeroComoStr[i];
  }

  if (numeroComoStr === numeroComoStrAlreves)
    return 'Es capicua';
  else return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let longitud = cadena.length;
  let i = 0;
  let letrasParaEliminar = ['a', 'b', 'c'];
  let cadenaMod = ''

  while (i < longitud) {
    if ( !(letrasParaEliminar.includes(cadena[i])) )
      cadenaMod += cadena[i];
    i++;
  }

  return cadenaMod;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  return arr.sort( function(a, b) {
    return a.length - b.length;
  } )
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let arrResultado = [];

  arreglo1.forEach( function(elemento) {
    if ( arreglo2.includes(elemento) )
      arrResultado.push(elemento);
  } );

  return arrResultado.sort( function(a, b) {
    return a - b;
  } );
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

