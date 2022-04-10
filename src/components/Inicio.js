
let palabra;

let listaPalabras = [];
const nuevaPalabra = document.querySelector("#nuevaPalabra");
const agregarPalabra = document.querySelector("#agregarPalabra");

function agregaPalabra(){
    listaPalabras = [];
    listaPalabras.push(nuevaPalabra.value)
    console.log(nuevaPalabra.value);
    console.log(listaPalabras);
    nuevaPalabra.value = '';
}
function validaAgregaPalabra(){
    
    const pattern = new RegExp('^[A-Z]+$');

    if(pattern.test(nuevaPalabra.value)){
        agregaPalabra();
    } else{
        alert("Solo letras mayúsculas, sin espacios sin acentos ni caracteres especiales")
    }
}
agregarPalabra.addEventListener("click", validaAgregaPalabra);
