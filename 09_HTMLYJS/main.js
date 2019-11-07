let titulo = document.getElementById('titulo');
let cambiarTexto = document.getElementById('changeJS');
let textChange = document.getElementById('textChange')
let button = document.getElementById('button');
let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let password = document.getElementById('password');
let enviar = document.getElementById('enviar');
let valorNombre = document.getElementById('valorNombre');
let valorEmail = document.getElementById('valorEmail');
let valorPassword = document.getElementById('valorPassword');
let validar = document.getElementById('validar');


console.log(titulo);
cambiarTexto.innerHTML = "Cambio en H2 desde JavaScript con variable cambiarTexto";
titulo.innerHTML = "Hola, desde JS";

const nuevoTexto = () => {
    changeText.innerHTML = "Este es un nuevo texto";
}

button.addEventListener('click', nuevoTexto);

// const formulario = () => {
//     valorNombre.innerHTML = nombre.value;
//     valorEmail.innerHTML = email.value;
//     valorPassword.innerHTML = password.value;
// }

const validacion = () => {
        let valorNombre = nombre.value;
        let valorEmail = email.value;
        let valorPassword = password.value;

        valorNombre.innerHTML = valorNombre;
        valorEmail.innerHTML = valorEmail;
        valorPassword.innerHTML = valorPassword;

        let nombreCorrecto = "Aldo";
        let emailCorrecto = "aldo.arriaga@gmail.com";
        let passwordCorrecto = '1234'

    if (valorNombre === 'Aldo' && valorEmail === 'aldo.arriaga@gmail.com' && valorPassword === '1234') {
                validar.innerHTML = "Datos Correctos";
    } else {
        validar.innerHTML = "Datos incorrectos";
    }
}

enviar.addEventListener('click', validacion)
