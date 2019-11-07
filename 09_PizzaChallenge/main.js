let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');

const showCheescake = () => {
    document.getElementById('img1').classList.remove('d-none');
    document.getElementById('img2').classList.add('d-none');
}

button1.addEventListener('click', showCheescake);

const showCookies = () => {
    document.getElementById('img2').classList.remove('d-none');
    document.getElementById('img1').classList.add('d-none');
}

button2.addEventListener('click', showCookies);

const showNone = () => {
    document.getElementById('img2').classList.add('d-none');
    document.getElementById('img1').classList.add('d-none');
}

button3.addEventListener('click', showNone);