
function criptografar() {

let resultado = document.getElementById("texto").value

let textoarea = document.getElementById("caixadetexto")

let alerta = document.createElement("p")
alerta.id="alert"

let message = "O texto não pode conter letras maiúsculas ou pontuação!"
let mesage = "Texto Criptografado com Sucesso!"
let mesagem = "Texto Descriptografado com Sucesso!"

if (/[A-Záéíóúãâêîôûàèìòùäëïöü]/.test(resultado) || /[.,\/#!$%\^&\*;:{}=\-_`ã()]/.test(resultado)) {
document.body.appendChild(alerta);

 alerta.innerHTML = message

 function limparTexto1() {
   
    alerta.innerHTML = "";
}


setInterval(limparTexto1, 3000);




    return;
}else{

let textoCriptografado = resultado
.replace(/e/g, "enter")
.replace(/i/g, "imes")
.replace(/a/g, "ai")
.replace(/o/g, "ober")
.replace(/u/g, "ufat");

textoarea.innerHTML = textoCriptografado

document.getElementById("texto").value=""

document.body.appendChild(alerta);

 alerta.innerHTML = mesage

 alerta.style.color="green"

 function limparTexto2() {
   
    alerta.innerHTML = "";
}


setInterval(limparTexto2, 3000);

 
}




}

function copiar() {
let copiarTexto = document.getElementById("caixadetexto")
copiarTexto.select();
document.execCommand("copy");

}

function descriptografar(){
let resultado2 = document.getElementById("texto").value

let textoarea = document.getElementById("caixadetexto")

let alerta = document.createElement("p")

alerta.id="alert"

let mesagem = "Texto Desriptografado com Sucesso!"

let textoDescriptografado = resultado2

.replace(/enter/g, "e")
.replace(/imes/g, "i")
.replace(/ai/g, "a")
.replace(/ober/g, "o")
.replace(/ufat/g, "u");

textoarea.innerHTML = textoDescriptografado

document.getElementById("texto").value=""


document.body.appendChild(alerta);

 alerta.innerHTML = mesagem

 alerta.style.color="green"

 function limparTexto3() {
   
    alerta.innerHTML = "";
}


setInterval(limparTexto3, 3000);

 
}












