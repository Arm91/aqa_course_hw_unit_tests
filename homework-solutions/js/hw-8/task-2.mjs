/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  let copy = [...wordsArr];
  return copy.sort((a, b) => countVowels(a) - countVowels(b));
}

function countVowels(word) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of word) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

export { sortedByVowels };
