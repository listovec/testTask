
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