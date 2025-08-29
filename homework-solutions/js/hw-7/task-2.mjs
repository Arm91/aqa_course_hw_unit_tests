/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false;
  let normalized = word.toLowerCase();
  let reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string' || sentence.trim() === '') return [];
  let words = sentence.split(' ');
  let longestWord = Math.max(...words.map((word) => word.length));
  return words.filter((word) => word.length === longestWord);
}

export { isPalindrom, findLongestWords };
