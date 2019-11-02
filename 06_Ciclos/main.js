//for(parámetros de repetición;instrucción){
    //código a ejecutar
//}

// for(let i = 0; i <= 100; i = i + 10){
//     console.log(i);
// }

// console.log('Excercise One');

// for(let i = 10; i <= 1000; i = i + 5) {
//     console.log(i);
// }

// console.log('Excercise Two');

// for(let i = 500; i >= 0; i = i - 2) {
//     console.log(i);
// }

// console.log('Excercise Three');

// for(let i = -763; i <= 15; i = i + 3) {
//     console.log(i);
// }

for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i + ' fizbuzz');
    } else if(i % 3 === 0) {
        console.log(i + ' fizz');
    } else if(i % 5 === 0){
    console.log(i + ' buzz');
    } else {
    console.log('' + i);
}
}
