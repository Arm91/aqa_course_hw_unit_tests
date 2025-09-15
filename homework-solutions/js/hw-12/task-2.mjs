/*
Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
Преобразуйте респонс из JSON в объект
Проверьте, что айди в респонсе === 201
Функция должна возвращать полученный объект из респонса
Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
*/

async function createTodo(body) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(body),
    });

    if (response.status !== 201) {
      throw new Error(`Error: Expected Status: 201, Current status: ${response.status}`);
    }

    const data = await response.json();

    if (data.id !== 201) {
      throw new Error(`Error: Expected ID: 201, Current ID: ${data.status}`);
    }

    return data;
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Function finished');
  }
}

createTodo({ userId: 1, title: 'New Todo Test', completed: true }).then((result) => console.log(result));
