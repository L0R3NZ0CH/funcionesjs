// Esturcutras de control
// Condicionales y ciclos
// While, dowhile, for
//  indice; condcionale; incrmento o decremento

// for (let index = 1; index < 6; index++) {
//     if (index= 3){
//         break;
//     }
//     debugger;
 
// }
// console.log(index);
// funciones
function suma() {
    let digito1 = parseFloat(document.getElementById('digito1').value);
    let digito2 = parseFloat(document.getElementById('digito2').value);
    let resultado = digito1+digito2;
    
    document.getElementById('respuesta').textContent = resultado;
}
function resta() {
    let digito1 = parseFloat(document.getElementById('digito1').value);
    let digito2 = parseFloat(document.getElementById('digito2').value);
    let resultado = digito1-digito2;
    
    document.getElementById('respuesta').textContent = resultado;
}
function division() {
    let digito1 = parseFloat(document.getElementById('digito1').value);
    let digito2 = parseFloat(document.getElementById('digito2').value);
    let resultado = digito1/digito2;
    
    document.getElementById('respuesta').textContent = resultado;
}
function multiplicar() {
    let digito1 = parseFloat(document.getElementById('digito1').value);
    let digito2 = parseFloat(document.getElementById('digito2').value);
    let resultado = digito1*digito2;
    
    document.getElementById('respuesta').textContent = resultado;
}

let boton = document.querySelector('.botonClick');
//evento del mouse
                    // evento que va escuchar, funcion que se va a ejecutar
boton.addEventListener("click",    function () {
      console.log('Dimos click en el boton click');
      boton.classList.toggle('verde');
    })

boton.addEventListener("mouseover", function () {
    console.log('EStamos sobre el boton');
})
boton.addEventListener("mouseout", function () {
    console.log('Fuera del boton');
})

//Evento en el teclado
window.addEventListener("keydown", (e) => {
    console.log('Pulso la tecla');
    console.log(String.fromCharCode(e.keyCode));
})
window.addEventListener('keypress', (e) => {
console.log('Pulso la tecla');})

window.addEventListener("keyup", (e) => {
    console.log('Deje de pulsar la tecla');});


window.addEventListener('load', () => {
    console.log('Termine de cargar la paginado');})


let bagregar =document.querySelector('.botonAgregar');
let textoInput = document.querySelector('.inputTexto');
let textBox = document.querySelector('.textoBox');

bagregar.addEventListener('click', function(){
let textoIngresado = textoInput.value;

    textBox.value += textoIngresado;
    textoInput.value ='';


});



// suma(5,6);
// function suma(a,b,c) {
// return console.log(a,b,c);
  
// }
// const numero = [5,6,7];
// let resultadodefuncion = suma(3,4,...numero);
// console.log(resultadodefuncion);

// funcion anonima
// let saludar = function () {'hola mundo'};
// console.log(saludar);

// function callbackLorenzo(a,b, function(){console.log('hola chantal');}) {
    
// }) {

// let holaArrow = (nombre) => console.log('Hola' + nombre + 'desde una arrow  ');
// holaArrow('Chantal');
// }