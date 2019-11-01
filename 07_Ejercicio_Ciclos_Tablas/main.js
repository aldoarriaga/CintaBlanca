//Poner la tabla del 1 hasta tabla del 10...

// 1x1=1
// 1x2=2
// 1x3=3
//...
// 10x8=80
// 10x9=90
// 10x10=100

for(let i = 1; i <= 10; i++ ) {
    for(let j = 1; j <= 10; j++) {
        console.log(i + ' x ' + j + ' = ' + i * j);
    }
}