let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);

    // console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento(`p`,`acertaste el número en ${intentos} ${(intentos === 1) ? `vez` : `veces`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
        // El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento(`p`, `El número secreto es menor`);
        } else {
            asignarTextoElemento(`p`, `El número secreto es mayor`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
// función de limpieza de caja siempre afuera

function limpiarCaja() {
document.querySelector(`#valorUsuario`).value ='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los números // 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento(`p`, `ya se sortearon todos los números posibles`);
    } else {

    // Si el nro generado está incluido en la lista //  
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales() {
    asignarTextoElemento(`h1`, `juego del número secreto`);
    asignarTextoElemento(`p`, `indica el nro del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiarCaja.
    limpiarCaja();
    //Indicar mensaje de intervalo de números.
    condicionesIniciales();
    //Generar el número aleatorio. 
    numeroSecreto = generarNumeroSecreto
    //Inicializar el número intentos.
    intentos = 1;
    //Deshabilitar el boton de Nuevo Juego.
    document.querySelector(`#reiniciar`).setAttribute(`disable`, `true`);
    
}

condicionesIniciales();