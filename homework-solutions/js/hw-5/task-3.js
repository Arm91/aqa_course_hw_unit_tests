/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';
let vouelCounter = 0;
let consonantCounter = 0;
for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i])) {
    vouelCounter++;
  } else if (consonants.includes(word[i])) {
    consonantCounter++;
  }
}
vowelsAndConsonantsResult = `${word} contains ${vouelCounter} vowels and ${consonantCounter} consonants`;

export { vowelsAndConsonantsResult };
