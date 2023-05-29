let btnEncrypter = document.getElementById("btnEncrypter");
let btnDesencrypter = document.getElementById("btnDesencrypter");
let btnCopy = document.getElementById("btnCopy");
let munieco = document.querySelector(".munieco");
let h2 = document.getElementById("h2Out")
let parrafo = document.getElementById("parrafoOut");
let msjOut = document.getElementById("mesageOut");
const simbolos = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;
var mensaje = document.getElementById("message");
btnEncrypter.onclick = changeText;
btnDesencrypter.onclick = revertText;
btnCopy.onclick = copyText;

/*Funcion para obtener el texto de entrada del textarea*/
function saveText() {
    let msgInp = document.getElementById("message").value;
     return msgInp;
 }
/*Ejecuta el encriptado */
function changeText() {
    hiddenElements();
    msjOut.textContent = encrypterText(saveText()); 
    
}
/*Ejecuta el desencriptado*/
function revertText() {
    hiddenElements(); 
    msjOut.textContent = desencrypterText(saveText()); 
}
/*Ocultar elementos*/
function hiddenElements() {
    munieco.classList.add("ocultar");
    h2.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}
/*Mostrar elementos*/
function showElements(){
    munieco.classList.remove("ocultar");
    h2.classList.remove("ocultar");
    parrafo.classList.remove("ocultar"); 
}
/*Funcion para encriptar*/
function encrypterText(mensaje){
    let text = mensaje;
    let finalText = "";
    if(text === ""){
        swal({
            text: "Por favor ingresa un texto",
            icon: "info",
        });
        showElements(); 
    }
    else if (text.match(simbolos) != null){
        swal({
            text: "Solo letras minúsculas y sin acentos",
            icon: "error",
        });
        showElements();
        return;
    }
    for(let i = 0; i < text.length; i++) {
        if(text[i] == "a"){
            finalText = finalText + "ai";
        }
        else if(text[i] == "e"){
            finalText = finalText + "enter";
        }
        else if(text[i] == "i"){
            finalText = finalText + "imes";
        }
        else if(text[i] == "o"){
            finalText = finalText + "ober";
        }
        else if(text[i] == "u"){
            finalText = finalText + "ufat";
        }
        else {
            finalText = finalText + text[i];
        }
    }
    return finalText;
}
/*Funcion para desencriptar*/
function desencrypterText(mensaje){
    let text = mensaje;
    let finalText = "";
    if(text === ""){
        swal({
            text: "Por favor ingresa un texto",
            icon: "info",
        });
        showElements();   
    }
    else if (text.match(simbolos) != null){
        swal({
            text: "Solo letras minúsculas y sin acentos",
            icon: "error",
        });
        showElements();
        return;
    }
    for(let i = 0; i < text.length; i++) {
        if(text[i] == "a"){
            finalText = finalText + "a";
            i = i + 1; 
        }
        else if(text[i] == "e"){
            finalText = finalText + "e";
            i = i + 4;
        }
        else if(text[i] == "i"){
            finalText = finalText + "i";
            i = i + 3;
        }
        else if(text[i] == "o"){
            finalText = finalText + "o";
            i = i + 3;
        }
        else if(text[i] == "u"){
            finalText = finalText + "u";
            i = i + 3;
        }
        else {
            finalText = finalText + text[i];
        }
    }
    return finalText;
}
/*Funcion para copiar texto con el boton*/
function copyText() {
    let parrafoCopy = document.getElementById("mesageOut");
    let contenido = parrafoCopy.innerHTML; 
    navigator.clipboard.writeText(contenido);

    parrafoCopy.textContent = ""; 
}
