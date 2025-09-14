// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
const delayTwoSeconds = (callback) => {
  setTimeout(callback, 2000);
};

delayTwoSeconds(() => console.log('Called after 2 seconds'));

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
const promise = new Promise((resolve) => resolve(1));

promise.then((value) => console.log(value));

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
const failedPromise = new Promise((_, reject) => {
  reject('Promise failed');
});

failedPromise.catch((error) => console.log(error));

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
const promiseNumber = (number) => {
  return Promise.resolve(number);
};

promiseNumber(42).then((num) => console.log(num));

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then((results) => {
    results.forEach((r, index) => {
      console.log(`Promise ${index + 1} result:`, r);
    });
  })
  .catch((err) => {
    console.error('Promise.all failed with:', err);
  });

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((outcomes) => {
  outcomes.forEach((outcome, index) => {
    if (outcome.status === 'fulfilled') {
      console.log(`Promise ${index + 1}: status=fulfilled, value=`, outcome.value);
    } else {
      console.log(`Promise ${index + 1}: status=rejected, reason=`, outcome.reason);
    }
  });
});
// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function runAll() {
  try {
    const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((r, i) => console.log(`(async) Promise ${i + 1} result:`, r));
  } catch (err) {
    console.error('(async) Promise.all failed with:', err);
  }
}
runAll();

async function runAllSettled() {
  const outcomes = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
  outcomes.forEach((outcome, i) => {
    if (outcome.status === 'fulfilled') {
      console.log(`(async) Promise ${i + 1}: fulfilled ->`, outcome.value);
    } else {
      console.log(`(async) Promise ${i + 1}: rejected ->`, outcome.reason);
    }
  });
}
runAllSettled();
