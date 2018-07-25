// En este llamado traigo el texto que ingresa el usuario sin cifrar al input de cifrar
let string = document.getElementById('plainTextInput');
// En este llamado ingreso el numero de saltos que quiero que de para cifrar.
let offset = document.getElementById('numberInput');
// En este input el usuario recibe su mensaje cifrado.
let cipher = document.getElementById('cipher');
// Boton que indica que debe cifrar
let encrypt = document.getElementById('encrypt');
// Boton que indica que debe decifrar
let decrypt = document.getElementById('decrypt');

encrypt.addEventListener('click', (event) => {
    let codifica = window.cipher.encode(offset.value, string.value);
    console.log(codifica);
    cipher.innerHTML= codifica; 
})

decrypt.addEventListener('click', (event) => {
    let decodifica = window.cipher.decode(offset.value, cipher.value);
    console.log(decodifica);
    cipher.innerHTML= decodifica;
})