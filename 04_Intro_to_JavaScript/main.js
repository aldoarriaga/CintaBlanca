// // Comprobar si está linkeada
// // alert('Hola')

// // var numero = 10

// // let es variable

// // valor numerico
// let numero = 10;

// //valor string o texto
// let texto = 'Hello World!';

// //valor boolean
// let verdadero = true;
// let falso = false;

// // objeto
// let object = {};

// //array
// let array = []

// //------------INICIO------------->

// let x = 100;
// let y = 50;
// let suma = x + y
// //console.log( x + y );
// // console.log(suma);

// // + - * / %

// // let cambiar = 1500;
// // console.log(cambiar);
// // cambiar = 10;
// // console.log(cambiar);
// // cambiar = 'Texto';
// // console.log(cambiar);

// let frutas = ['melon','sandía','fresa']
// // console.log(frutas[1]);
// frutas[3] = 'Manzana';
// frutas.push('Guayaba');
// // frutas.pop();
// // frutas.pop();
// //splice(#posición, #elementos a borrar)
// frutas.splice(1, 2)
// // console.log(frutas);

// //objects
// // let persona = {
// //     nombre : 'Aldo',
// //     dirección : 'Mártires de la Conquista',
// //     teléfono : '554367807',
// //     email : 'aldo.arriaga@gmail.com',
// //     edad : 21,
// //     trabajos : ['EA','adidas','Freelance'],
// //     equipos : {
// //         premier : ['Spurs', 'Man City', 'Liverpool FC'],
// //         laliga : 'Real Madrid',
// //         Bundesliga : 'Bayern Munich',
// //     }
// // }

// // console.log(persona.equipos.premier[2]);

// name = prompt('cuál es tu nombre?','Ej. Felipe')
// console.log('Nombre: ' + name);
// edad = Number(prompt('cuál es tu edad?'));
// console.log('Edad: ' + edad);
// telefono = prompt('cuál es tu telefono?')
// console.log('Teléfono: ' + telefono);

// anoactual = 2019;
// // Number(edad);
// dob = (anoactual - edad)
// console.log('Naciste en ' + dob);

// anonascimiento = prompt('En qué año naciste?')
// age = (2019 - anonascimiento)
// console.log(age + ' años');

let persona = {
    nombre : 'Aldo',
    edad : 35,
    telefono : 5543657807,
    equipos : {
        premiere : ['Chelsea FC', 'Manchester City', 'Liverpool FC'],
        laliga : ['FC Barcelona', 'Real Madrid', 'Valencia FC'],
        bundesliga : ['Bayern Munich', 'Schalke 04', 'SV Werder Bremen'],
    },
    destinos : {
        europa : ['Paris', 'Barcelona', 'Londres', 'Berlin'],
        sudamerica : ['Buenos Aires', 'Rio de Janeiro', 'São Paulo', 'Santiago'],
        asia : ['Shanghai', 'Hong Kong', 'Vietnam', 'Tokyo'],
    },
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.telefono);
console.log(persona.equipos.premiere[1]);
console.log(persona.equipos.laliga[0]);
console.log(persona.destinos.europa[3]);
