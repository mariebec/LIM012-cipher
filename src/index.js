import cipher from './cipher.js';

//console.log(cipher);
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const outputTitle = document.getElementById('outputTitle');
const inputNumber = document.getElementById('displacementValue');
//Evento del botón cifrar
const encodeButton = document.getElementById('encode');
encodeButton.addEventListener('click', () => {
    const offset = parseInt(document.getElementById('displacementValue').value);
    const string = document.getElementById('inputText').value;
    //Poniendo el valor que retorna encode() como valor del input
    outputText.value = cipher.encode(offset, string);
    //Si el input no está vacío retornar el mensaje de cifrado
    if(inputText.value!==''){
        outputTitle.innerHTML='Aquí está tu texto cifrado';
    }
})
//Evento del botón descifrar
const decodeButton = document.getElementById('decode');   
decodeButton.addEventListener('click', () => {
    const offset = parseInt(document.getElementById('displacementValue').value);
    const string = document.getElementById('inputText').value;
    //Poniendo el valor que retorna encode() como valor del input
    outputText.value = cipher.decode(offset, string);
    //Si el input no está vacío retornar el mensaje de descifrado
    if(inputText.value!==''){
        outputTitle.innerHTML='Aquí está tu texto descifrado';
    }
})
//Evento del botón borrar
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', () => {
    inputText.value='';
    outputText.value='';
    inputNumber.value=0;
    outputTitle.innerHTML='Resultado';
})
//Evento del botón copiar
const copy = document.getElementById('copy');
copy.addEventListener('click', () => {
    //crear una variale que contendrá un cuadro de texto oculto
    const aux = document.createElement('input');
    //Asignarle al input nuevo el valor del contenido del área de texto
    aux.setAttribute('value', outputText.value);
    //Añadir el campo a la página
    document.body.appendChild(aux);
    //Seleccionar el contenido del campo
    aux.select();
    //Copiando el texto seleccionado
    document.execCommand('copy');
    //Eliminar el cuadro de texto auxiliar
    document.body.removeChild(aux);
    //Avisar al usuario que se ha copiado el texto
    const aviso = document.createElement('div');
    aviso.setAttribute('id', 'aviso');
    aviso.classList.add('jstext');
    aviso.innerHTML = 'Se ha copiado el texto';
    document.body.appendChild(aviso);
    document.load = setTimeout('document.body.removeChild(aviso)', 1500);
})