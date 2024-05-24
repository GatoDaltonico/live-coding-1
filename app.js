//Verónica Chávez, me calificó Brenda Tiburcio, 5/5 muy bien implementado y organizado, fácil de entender y funciona correctamente, revisa bien los errores y los corrige

// Define el array de palabras
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio', 'auto', 'bicicleta', 'televisor', 'computadora'];

// Función que recibe un string y un array de strings, y retorna las palabras más largas que el string
function bigWords(str, arr) {
    return arr.filter(word => word.length > str.length);
}

// Función que recibe un array de strings y los imprime en una lista en el HTML
function printArray(arr) {
    const ul = document.getElementById('wordList');
    ul.innerHTML = ''; // Limpia la lista antes de agregar los nuevos elementos
    arr.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        ul.appendChild(li);
    });
}

// Maneja el evento del botón
document.getElementById('filterButton').addEventListener('click', () => {
    const inputWord = document.getElementById('inputWord').value;
    const filteredWords = bigWords(inputWord, myArray);
    printArray(filteredWords);
});
