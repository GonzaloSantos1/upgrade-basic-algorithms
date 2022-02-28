// Consigue el valor "HULK" del array de cars y muestralo por consola.
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];

console.log(avengers[0]);

// Cambia el primer elemento de avengers a "IRONMAN"
avengers[0] = 'IRONMAN';

// Alert numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
alert(avengers.length);

// Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry'];

rickAndMortyCharacters.push('Morty', 'Summer');
let lastElement = rickAndMortyCharacters.length - 1;
console.log(rickAndMortyCharacters[lastElement]);

// Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez',
];

rickAndMortyCharacters.pop();
let lastElement = rickAndMortyCharacters.length - 1;
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[lastElement]);

// Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez',
];

rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);
