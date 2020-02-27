import cipher from './cipher.js';

const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const outputTitle = document.getElementById('outputTitle');
const inputNumber = document.getElementById('displacementValue');
// Evento del botón cifrar
const encodeButton = document.getElementById('encode');
encodeButton.addEventListener('click', () => {
  const offset = parseInt(document.getElementById('displacementValue').value, 10);
  const string = document.getElementById('inputText').value;
  // Poniendo el valor que retorna encode() como valor del input
  outputText.value = cipher.encode(offset, string);
  // Si el input no está vacío retornar el mensaje de cifrado
  if (inputText.value !== '') {
    outputTitle.innerHTML = 'Aquí está tu texto cifrado';
  }
});
// Evento del botón descifrar
const decodeButton = document.getElementById('decode');
decodeButton.addEventListener('click', () => {
  const offset = parseInt(document.getElementById('displacementValue').value, 10);
  const string = document.getElementById('inputText').value;
  // Poniendo el valor que retorna encode() como valor del input
  outputText.value = cipher.decode(offset, string);
  // Si el input no está vacío retornar el mensaje de descifrado
  if (inputText.value !== '') {
    outputTitle.innerHTML = 'Aquí está tu texto descifrado';
  }
});
// Evento del botón borrar
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', () => {
  inputText.value = '';
  outputText.value = '';
  inputNumber.value = 0;
  outputTitle.innerHTML = 'Resultado';
});
// Evento del botón copiar
const copy = document.getElementById('copy');
copy.addEventListener('click', () => {
  // Copiando el contenido del input
  const aux = document.createElement('input');
  aux.setAttribute('value', outputText.value);
  document.body.appendChild(aux);
  // Se selecciona el contenido del campo
  aux.select();
  // Copiando el texto seleccionado
  document.execCommand('copy');
  document.body.removeChild(aux);
  // Avisando al usuario que se ha copiado el texto
  const notification = document.createElement('div');
  // notification.setAttribute('id', 'notification');
  notification.classList.add('jstext');
  // Insertando al DOM el mensaje
  notification.innerHTML = 'Se ha copiado el texto';
  document.body.appendChild(notification);
  // Se muestra el div en el documento durante 1.2segs y se elimina del documento
  // document.load = setTimeout('document.body.removeChild(notification)', 1200);
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 1200);
});
