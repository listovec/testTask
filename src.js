//1. В массиве, содержащем 3 или более чисел, определить подходит ли
//каждая группа из трех чисел условию a > b < c или a < b > c. Оформить
//решение в виде функции которая принимает исходный массив и возвращает
//массив с результатом проверки каждой группы, где 1 удовлетворяет
//условию и 0 - нет.

const number = (arr, chunkLength, comparators) => {
  function* eachChunk(arr, length) {
    let currentNumber = 0;
 
    while (currentNumber <= arr.length - length) {
      yield arr.slice(currentNumber, currentNumber++ + length);
    }
  }
 
  const result = [];
 
  for (const chunk of eachChunk(arr, chunkLength)) {
    result.push(+comparators.some(cmp => cmp(...chunk)))
  }
 
  return result;
}
 
console.log(number([1, 3, 5, 4, 5, 7], 3, [
  (a, b, c) => a > b && b < c,
  (a, b, c) => a < b && b > c
]));

//2. Дана матрица из целых чисел от 1 до 9, размером 3 * N, где N может быть
//больше либо равна 3. Необходимо определить содержит ли каждый участок
//матрицы 3 * 3 все числа от 1 до 9.

const array = [
  [1, 2, 3, 2, 7],
  [4, 5, 6, 8, 1],
  [7, 8, 9, 4, 5]
];
function solution(matrix, array) {result = []
    for (let i = 0; matrix[0].length -3 >= i; i++) {
    const subarr = matrix.map((row) => row.slice(i, i + 3)).flat();
        result.push(ideal.every(v => subarr.includes(v)))
  }
  return result;
}
console.log(solution(array))

// 3. Есть набор строк (строка это массив из слов), условия форматирования
//каждой этой строки и лимит символов в строке. Необходимо подготовить
//текст к публикации, так чтобы он удовлетворял условиям форматирования и
//не превышал количество символов в строке. Текст должен быть заключен
//символ * со всех сторон.

let text = [
  ["Hello", "world"],
  ["Brad", "came", "to", "dinner", "with", "us"],
  ["He", "loves", "tacos"]
];
let right = text[1].slice(0, text[1].length/2);
let left = text[1].slice(text[1].length/2);
let temp = text[2];
text[1] = right;
text[2] = left;
text[3] = temp;
let str = "";
nam = 0;
for (let i = 0; i < 4; i++) {
  for (let c = 0; c < 1; c++) {
      if (str < 16) {  
          text[nam].unshift("*");
          text[nam].push(" *");       
      }
      else {
          text[nam].unshift("* ");
          text[nam].push("*");
      }
  }
  nam++;
}

console.log(text);