// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Función para agregar amigos
function agregarAmigo () {
    let nombreAmigo = document.getElementById("amigo").value;
    if (amigos.includes(nombreAmigo) || espacioBlanco(nombreAmigo)){
        alert("Por favor, inserte un nombre válido o que no se repita");
    } else {
        amigos.push(nombreAmigo);
        crearLista(amigos);
        limpiarCaja();
    }
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function mostrarLista() {
    asignarTextoElemento(listaAmigos, amigos);
    return;
}

//Evitar espacios en blanco
function espacioBlanco (amigo) {
if (amigo == null) {
    return true;
}
    if (typeof amigo === "string") {
      return amigo.trim().length === 0;
    } else {
         return false;
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "<li class='resultado-amigo'>No hay amigos para sortear.</li>";
        return;
    }
    // Generar un índice aleatorio
    let numeroAmigo = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[numeroAmigo];
    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = `<li class="resultado-amigo">El amigo sorteado es: ${amigoSorteado}</li>`;
    limpiarLista(amigoSorteado);
    return;
}

function crearLista(listaDeAmigos){
  let lista = document.getElementById("listaAmigos");
  asignarTextoElemento("listaAmigos", "");

  for(let amigo of listaDeAmigos){
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = amigo;
    lista.appendChild(nuevoElemento);
  }
   return;
}

function limpiarCaja () {
    document.querySelector("#amigo").value = "";
  return;
}

function limpiarLista (amigoSorteado) {
    asignarTextoElemento("listaAmigos","");
    return;
}

//Codigo para que el input solo puedan ser letras(No admite espacios ni numeros)
  document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('amigo');

    inputField.addEventListener('input', function(event) {
      // Reemplaza cualquier caracter que no sea una letra con un espacio en blanco
      event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
    });
  });