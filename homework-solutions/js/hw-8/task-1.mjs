/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
  2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - присвойте элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/
const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

//1
let forEach = [];
numbers.forEach((num) => {
  if (num % 3 === 0) forEach.push(num);
});

//2
let map = numbers.map((num) => num - numbers.length);

//3
let filter = numbers.filter((num, index) => {
  if (index === 0) return false;
  else if (numbers[index - 1] < num) return true;
});

//4
let find = numbers.find((num, index) => num === index);

//5
let sort = numbers.sort((a, b) => a - b);

//6
let reduce = numbers.reduce((a, b) => a + b);

//7
let some = numbers.some((a) => a > 90);

//8
let every = numbers.every((a) => a >= 10 && a <= 99);

export { forEach, map, filter, find, sort, reduce, some, every };
