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