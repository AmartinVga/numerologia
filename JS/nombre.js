
document.getElementById("formuNombre").addEventListener("submit", function(event) {
    event.preventDefault();
    let nombreRaw = document.getElementById('nombre').value.toLowerCase();
    let nombre2Raw = document.getElementById('nombre2').value.toLowerCase();
    let apellidoRaw= document.getElementById('apellido').value.toLowerCase();
    let nombre = getCleanedString(nombreRaw);
    let nombre2 = getCleanedString(nombre2Raw);
    let apellido = getCleanedString(apellidoRaw)

    let nombreVocales = [];
    let nombreConsonantes = [];
    function nombreCompletoFuncion(){
       let nombreTotal = nombre.length + nombre2.length +apellido.length;
       return nombreTotal;
    }  
    for (i=0; i< nombre.length; i++){
        if (nombre[i]=== "a" || nombre[i]=== "e" || nombre[i]=== "i"|| nombre[i]=== "o" || nombre[i]=== "u"){
            nombreVocales.push(nombre[i])
        }else{
            nombreConsonantes.push(nombre[i])
        }
    }
    let nombre2Vocales = []
    let nombre2Consonantes = []
    for (i=0; i< nombre2.length; i++){
        if (nombre2[i]=== "a" || nombre2[i]=== "e" || nombre2[i]=== "i"|| nombre2[i]=== "o" || nombre2[i]=== "u"){
            nombre2Vocales.push(nombre2[i])
        }else{
            nombre2Consonantes.push(nombre2[i])
        }
    }
    let apellidoVocales = []
    let apellidoConsonantes = []
    for (i=0; i< apellido.length; i++){
        if (apellido[i]=== "a" || apellido[i]=== "e" || apellido[i]=== "i"|| apellido[i]=== "o" || apellido[i]=== "u"){
            apellidoVocales.push(apellido[i])
        }else{
            apellidoConsonantes.push(apellido[i])
        }
    }

    function letrasANumeros(array){
        let numerosNombre = 0;
        for (i=0; i< array.length; i++ ){
        switch(array[i]){
          case "a":
          case "j":
          case "s":
           numerosNombre += 1;
           break;
          case "b":
          case "k":
          case "t":
            numerosNombre += 2;
            break;
          case "c":
          case "l":
          case "u":
           numerosNombre += 3;
           break;
          case "d":
          case "m":
          case "v":
           numerosNombre += 4;
           break;
          case "e":
          case "n":
          case "w":
           numerosNombre += 5;
           break
          case "f":
          case "o":
          case "x":
           numerosNombre += 6;
           break;
          case "g":
          case "p":
          case "y":
           numerosNombre += 7;
           break;
          case "h":
          case "q":
          case "z":
           numerosNombre += 8;
           break
          case "i":
          case "r":
           numerosNombre += 9;
           break
          };
        };
        resultado = reducirAUnDigito(numerosNombre);
        return resultado
    };




    // console.log(letrasANumeros(apellidoVocales)+letrasANumeros(nombre2Vocales)+letrasANumeros(nombre2Vocales));


    finalCantidadLetras = document.getElementById('cantidadLetras');
    finalCantidadLetras.innerHTML = 'El ciclo de letras del nombre es ' + nombreCompletoFuncion() +'    % 2 o, x 2 <br>';
    // esencia
    h3esencia = document.getElementById('h3Esencia');
    h3esencia.innerHTML = 'La Esencia de acuerdo a tu nombre completo es: ' + reducirAUnDigito(letrasANumeros(apellidoVocales)+letrasANumeros(nombreVocales)+letrasANumeros(nombre2Vocales));
    esenciaCompuesta = document.getElementById('esenciaCompuesta');
    esenciaCompuesta.innerHTML = "El nombre <b>" + nombre + "</b> tiene una esencia " + letrasANumeros(nombreVocales)
    if (nombre2){
        esenciaNombre2 = document.getElementById('esenciaNombre2');
        esenciaNombre2.innerHTML = "El nombre <b>" + nombre2 + "</b> tiene una esencia " + letrasANumeros(nombre2Vocales)
    }else{
        esenciaNombre2.innerHTML = ""
    }
    esenciaApellido = document.getElementById('esenciaApellido');
    esenciaApellido.innerHTML = "El Apellido <b>" + apellido + "</b> tiene una esencia " + letrasANumeros(apellidoVocales);
    // imagen
    h3Imagen = document.getElementById('h3Imagen');
    h3Imagen.innerHTML = 'La Imagen de acuerdo a tu nombre completo es: ' + reducirAUnDigito(letrasANumeros(apellidoConsonantes)+letrasANumeros(nombreConsonantes)+letrasANumeros(nombre2Consonantes));
    imagenCompuesta = document.getElementById('imagenCompuesta');
    imagenCompuesta.innerHTML = "El nombre <b>" + nombre + "</b> tiene una imagen " + letrasANumeros(nombreConsonantes);
    if (nombre2){
        imagenNombre2 = document.getElementById('imagenNombre2');
        imagenNombre2.innerHTML = "El nombre <b>" + nombre2 + "</b> tiene una imagen " + letrasANumeros(nombre2Consonantes);
    }else{
        esenciaNombre2.innerHTML = "";
    }
    imagenApellido = document.getElementById('imagenApellido');
    imagenApellido.innerHTML = "El Apellido <b>" + apellido + "</b> tiene una imagen " + letrasANumeros(apellidoConsonantes);

    h3mision = document.getElementById('h3mision');
    h3mision.innerHTML = 'La mision/Destino en la vida de acuerdo a tu nombre completo es: ' + reducirAUnDigito(reducirAUnDigito(letrasANumeros(apellidoConsonantes) + letrasANumeros(nombreConsonantes) + letrasANumeros(nombre2Consonantes) + letrasANumeros(apellidoVocales) + letrasANumeros(nombreVocales) + letrasANumeros(nombre2Vocales)));
    misionCompuesta = document.getElementById('misionCompuesta');
    misionCompuesta.innerHTML = "El nombre <b>" + nombre + "</b> tiene una mision " + reducirAUnDigito(letrasANumeros(nombreConsonantes)+letrasANumeros(nombreVocales));
    if (nombre2){
        misionNombre2 = document.getElementById('misionNombre2');
        misionNombre2.innerHTML = "El nombre <b>" + nombre2 + "</b> tiene una mision " + reducirAUnDigito(letrasANumeros(nombre2Consonantes)+letrasANumeros(nombre2Vocales));
    }else{
        misionNombre2.innerHTML = "";
    }
    misionApellido = document.getElementById('misionApellido');
    misionApellido.innerHTML = "El Apellido <b>" + apellido + "</b> tiene una mision " + reducirAUnDigito(letrasANumeros(apellidoConsonantes)+letrasANumeros(apellidoVocales));

})

function reducirAUnDigito(valor){
    resultado = 0
    if (valor < 9 || valor ==11 || valor ==22){
    resultado = valor;
    }else{
    resultado = valor.toString().split('').reduce((acum, val) => acum + parseInt(val), 0);}
    return resultado
}
function getCleanedString(cadena){
    // Definimos los caracteres que queremos eliminar
    var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
 
    // Los eliminamos todos
    for (var i = 0; i < specialChars.length; i++) {
        cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    }   
 
    // Lo queremos devolver limpio en minusculas
    cadena = cadena.toLowerCase();
 
    // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
    cadena = cadena.replace(/ /g,"_");
 
    // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
    cadena = cadena.replace(/á/gi,"a");
    cadena = cadena.replace(/é/gi,"e");
    cadena = cadena.replace(/í/gi,"i");
    cadena = cadena.replace(/ó/gi,"o");
    cadena = cadena.replace(/ú/gi,"u");
    cadena = cadena.replace(/ñ/gi,"n");
    return cadena;
 }

//fecha = dia + mes +year;
// function reducirNumeros(fecha){
//     suma = fecha.split("")
//     reducir = suma.reduce((acumulator, currentValue) =>       {return acumulator + parseInt(currentValue)}, 0);
//     return reducir
// }
// reduccion = reducirNumeros(fecha);

// resultadoFinal = 0

// if (reduccion < 8 || reduccion == 11 || reduccion ==22) {
//     resultadoFinal = reduccion;
// }
    
// else if (reduccion > 9){
//     fecha2 = (reduccion).toString();
//     resultadoFinal = reducirNumeros(fecha2);
// }


// 19/10
// Ya la funcion letras a numeros que es el corazon de nuestra aplicacion tambien reduce los numeros mayores a 9 a un digito. Por lo tanto solo queda armar el output para poder mostar esta informacion de forma ordenada