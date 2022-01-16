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
ideal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function solution(matrix) {result = []
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

const text = [
  ["Hello", "world"],
  ["Brad", "came", "to", "dinner", "with", "us"],
  ["He", "loves", "tacos"]
];

const starSymbol = "*";

const generateRow = (sentence, direction, limit) => {
  const emptySpace = Array(limit - sentence.length)
    .fill(" ")
    .join("");
  return [
    `*${direction === "RIGHT" ? emptySpace : ""}${sentence}${
      direction === "LEFT" ? emptySpace : ""
    }*`
  ];
};

const formattingText = (targetArray, directions, limit) => {
  const result = [];

  targetArray.forEach((sentence, index) => {
    let concattedSentence = "";
    const direction = directions[index];

    sentence.forEach((word, i) => {
      const formattedWord = `${i !== 0 ? " " : ""}${word}`;
      if (formattedWord.length + concattedSentence.length > limit) {
        result.push(generateRow(concattedSentence, direction, limit));
        concattedSentence = "";
      }
      concattedSentence += `${concattedSentence ? " " : ""}${word}`;
    });

    result.push(generateRow(concattedSentence, direction, limit));
  });

  return [
    Array(limit + 2).fill(starSymbol),
    ...result,
    Array(limit + 2).fill(starSymbol)
  ];
};

console.log(formattingText(text, ["LEFT", "RIGHT", "LEFT"], 16));