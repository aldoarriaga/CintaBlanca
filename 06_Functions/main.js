// let resta = function {
//     console.log(10 - 9);
// }

// const suma2 = (a = 0 , b = 0) => {
//     console.log(a + b);
// }

// suma2 (10, 10);
// suma2 (10, 35);
// suma2 ();

// const saludar = (usuario = 'invitado') => {
//     console.log('Bienvenido ' + usuario);
// }

// saludar('Osvaldo');
// saludar();

// function saludo(persona = 'pepe') {
//     console.log('Hola ' + persona);
// }

// saludo('Juanito');
// saludo('Felipe');
// saludo();

// const juego = () => {
//         let player1 = prompt('piedra, papel o tijera?').toLowerCase();
//     let player2 = prompt('piedra, papel o tijera?').toLowerCase();

//     choice = player1 + player2

//     if(player1 == player2) {
//         console.log('Empataron');;
//     } else {

//     if(choice === 'piedratijera' || choice === 'papelpiedra' || choice === 'tijerapapel') {
//         console.log('Player 1 Gana!');
//     } else if(choice === 'tijerapiedra' || choice === 'piedrapapel' || choice === 'papeltijera') {
//         console.log('Player 2 Gana!');
//     } else {
//         console.log('No es una opción válida');
//     }
// }
// }

// juego();
// juego();

// let x =  Number(prompt('Dónde quieres que empiece?'));
// let y =  Number(prompt('Hasta qué número?'));
// let z =  Number(prompt('Qué intervalo?'));

// const ciclo = () => {
//     for(let i = x; i <= y; i = i + z)
//     console.log(i);
// }

// ciclo();


// let a = Number(prompt('Define A'));
// let b = Number(prompt('Define B'));
// let c = Number(prompt('Define C'));
// let d = Number(prompt('Define D'));

// const tabla = () => {
//     for(let i = a; i <= b; i++ ) {
//         for(let j = c; j <= d; j++) {
//             console.log(i + ' x ' + j + ' = ' + i * j);
//         }
//     }
// }

// tabla ();

// let a = Number(prompt('Define A'));
// let b = Number(prompt('Define B'));
// let c = Number(prompt('Define C'));
// let d = Number(prompt('Define D'));

// const tablas = () => {
//     for(let i = a; i <= b; i++) {
//         for(let j = c; j <= d; j++) {
//             console.log(i + ' x ' + j + ' = ' + i * j);
//         }
//     }
// }

// tablas()

const nuevaSuma = (a, b) => {
    return a + b;
}

const nuevaResta = (a, b) => {
    return a - b;
}

const multiplicacion = (a, b) => {
    return a * b;
}

console.log(multiplicacion(nuevaSuma(10, 10), nuevaResta(3,1)));

