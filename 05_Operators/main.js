// if(condicion){

// } else if (condicion2) {

// }
// name = prompt('cuál es tu nombre?','Ej. Felipe')

// edad = prompt('Cuál es tu edad?', 'Solo números');

// if (edad >= 18) {
//     console.log('Eres mayor de edad');
// } else {
//     console.log('Eres menor de edad');
// }

// number = prompt('Coloca un número')

// if ((number % 2) == 0) {
//     alert('El número es par');
// } else {
//     alert('El número es impar');
// }


//------>Nested
// let dia = 2;

// if(dia === 0) {
//     console.log("Lunes");
// } else if(dia === 1) {
//     console.log("Martes");    
// } else if(dia === 2) {
//     console.log("Miércoles");    
// } else if(dia === 3) {
//     console.log("Jueves");    
// } else if(dia === 4) {
//     console.log("Viernes");    
// } else if(dia === 5) {
//     console.log("Sábado");    
// } else if(dia === 6) {
//     console.log("Domingo");    
// } else {
//     console.log("No es válido");
// }

// edad = prompt('Cuál es tu edad?');

// if(edad < 16) {
//     console.log('Aún no puedes conducir');
// } else if(edad >= 16 && edad < 18) {
//     console.log('Puedes solicitar permiso de conducir');
// } else if(edad >= 18) {
//     console.log('Puedes solicitar licencia de conducir');
// } else {
//     console.log('Eso no es una edad');
// }

// player1 = prompt('piedra, papel o tijera?');
// player2 = prompt('piedra, papel o tijera?');

// if(player1 == player2) {
//     console.log('Empataron!');
// } else if(player1 == 'piedra' && player2 == 'tijera') {
//     console.log('Ganó Player1');
// } else if(player1 == 'piedra' && player2 == 'papel') {
//     console.log('Ganó Player2');
// } else if(player1 == 'papel' && player2 == 'piedra') {
//     console.log('Ganó Player1');
// } else if(player1 == 'papel' && player2 == 'tijera'){
//     console.log('Ganó Player2');
// } else if(player1 == 'tijera' && player2 == 'piedra') {
//     console.log('Ganó Player2');
// } else if(player1 == 'tijera' && player2 == 'papel'){
//     console.log('Ganó Player1');
// } else {
//     console.log('Hubo un error de selección');
// }



// player1 = prompt('piedra, papel o tijera?').toLowerCase();
// player2 = prompt('piedra, papel o tijera?').toLowerCase();

// choice = player1 + player2

// if(player1 == player2) {
//      text = 'Empataron!';
// } else {

// switch(choice) {
//     case choice = 'piedrapapel': text = 'Gana Player 2';
//     break;
//     case choice = 'piedratijera': text = 'Gana Player 1';
//     break;
//     case choice = 'papelpiedra': text = 'Gana Player 1';
//     break;
//     case choice = 'papeltijera': text = 'Gana Player 2';
//     break;
//     case choice = 'tijerapiedra': text = 'Gana Player 2';
//     break;
//     case choice = 'tijerapapel': text = 'Gana Player 1';
//     break;
//     default: text = 'Opción inválida';
//     break;
// }
// }
// document.getElementById("juego").innerHTML = text;
//

player1 = prompt('piedra, papel o tijera?').toLowerCase();
player2 = prompt('piedra, papel o tijera?').toLowerCase();

choice = player1 + player2

if(player1 == player2) {
     text = 'Empataron!';
} else {

if(choice === 'piedratijera' || choice === 'papelpiedra' || choice === 'tijerapapel') {
    text = 'Player 1 Gana!';
} else if(choice === 'tijerapiedra' || choice === 'piedrapapel' || choice === 'papeltijera') {
    text = 'Player 2 Gana!';
} else {
    text = 'No es una opción válida';
}
}
document.getElementById("juego").innerHTML = text;