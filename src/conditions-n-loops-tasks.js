/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  if (a + b < c || a + c < b || b + c < a) {
    return false;
  }

  if (a === b || a === c || b === c) {
    return true;
  }

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  if (num < 1) {
    return '';
  }
  if (num >= 10) {
    return `X${convertToRomanNumerals(num - 10)}`;
  }
  if (num >= 9) {
    return `IX${convertToRomanNumerals(num - 9)}`;
  }
  if (num >= 5) {
    return `V${convertToRomanNumerals(num - 5)}`;
  }
  if (num >= 4) {
    return `IV${convertToRomanNumerals(num - 4)}`;
  }
  if (num >= 1) {
    return `I${convertToRomanNumerals(num - 1)}`;
  }
  return 'hello';
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let resultStr = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        resultStr += 'zero ';
        break;
      case '1':
        resultStr += 'one ';
        break;
      case '2':
        resultStr += 'two ';
        break;
      case '3':
        resultStr += 'three ';
        break;
      case '4':
        resultStr += 'four ';
        break;
      case '5':
        resultStr += 'five ';
        break;
      case '6':
        resultStr += 'six ';
        break;
      case '7':
        resultStr += 'seven ';
        break;
      case '8':
        resultStr += 'eight ';
        break;
      case '9':
        resultStr += 'nine ';
        break;
      case '-':
        resultStr += 'minus ';
        break;
      case '.':
      case ',':
        resultStr += 'point ';
        break;
      default:
        break;
    }
  }

  const lastSymb = resultStr[resultStr.length - 1];
  if (lastSymb === ' ') {
    let newStr = '';

    for (let i = 0; i < resultStr.length - 1; i += 1) {
      newStr += resultStr[i];
    }

    return newStr;
  }

  return resultStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let numCopy = num;

  while (numCopy > 0) {
    const currentDigit = numCopy % 10;
    if (currentDigit === digit) {
      return true;
    }
    numCopy = Math.floor(numCopy / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }

    for (let n = i + 1; n < arr.length; n += 1) {
      rightSum += arr[n];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];

  for (let h = 0; h < size; h += 1) {
    matrix[h] = [];
    for (let v = 0; v < size; v += 1) {
      matrix[h][v] = 0;
    }
  }

  let count = 1;
  let rowStart = 0;
  let rowEnd = size - 1;
  let colStart = 0;
  let colEnd = size - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i += 1) {
      matrix[rowStart][i] = count;
      count += 1;
    }
    rowStart += 1;

    for (let i = rowStart; i <= rowEnd; i += 1) {
      matrix[i][colEnd] = count;
      count += 1;
    }
    colEnd -= 1;

    for (let i = colEnd; i >= colStart; i -= 1) {
      matrix[rowEnd][i] = count;
      count += 1;
    }
    rowEnd -= 1;

    for (let i = rowEnd; i >= rowStart; i -= 1) {
      matrix[i][colStart] = count;
      count += 1;
    }
    colStart += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const localMatrix = matrix;
  const size = localMatrix.length;

  for (let row = 0; row < size; row += 1) {
    for (let col = row; col < size; col += 1) {
      [localMatrix[row][col], localMatrix[col][row]] = [
        localMatrix[col][row],
        localMatrix[row][col],
      ];
    }
  }

  for (let row = 0; row < size; row += 1) {
    let start = 0;
    let end = size - 1;
    while (start < end) {
      [localMatrix[row][start], localMatrix[row][end]] = [
        localMatrix[row][end],
        localMatrix[row][start],
      ];
      start += 1;
      end -= 1;
    }
  }

  return localMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
// function sortByAsc(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const pivotIndex = Math.floor(Math.random() * arr.length);
//   const pivot = arr[pivotIndex];
//   const left = [];
//   const right = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (i !== pivotIndex) {
//       if (arr[i] < pivot) {
//         left[left.length] = arr[i];
//       } else {
//         left[right.length] = arr[i];
//       }
//     }
//   }
//   return [...sortByAsc(left), pivot, ...sortByAsc(right)];
// }

function sortByAsc(arr) {
  function swapPosition(array, i, j) {
    const localArray = array;
    const temp = localArray[i];
    localArray[i] = array[j];
    localArray[j] = temp;
  }

  function partition(arrP, lowP, highP) {
    const pivot = arrP[highP];
    let i = lowP - 1;
    for (let j = lowP; j < highP; j += 1) {
      if (arrP[j] < pivot) {
        i += 1;
        swapPosition(arrP, i, j);
      }
    }
    swapPosition(arrP, i + 1, highP);
    return i + 1;
  }

  function quickSort(arrQ, lowQ, highQ) {
    if (lowQ < highQ) {
      const pivotIndex = partition(arrQ, lowQ, highQ);
      quickSort(arrQ, lowQ, pivotIndex - 1);
      quickSort(arrQ, pivotIndex + 1, highQ);
    }
  }

  quickSort(arr, 0, arr.length - 1);
  return arr;
}
/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425' => '012345'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations = 1) {
  let result = str;
  let step = 1;

  while (step <= iterations) {
    let evenStr = '';
    let oddStr = '';

    for (let i = 0; i < result.length; i += 1) {
      if (i % 2 === 0) {
        evenStr += result[i];
      } else {
        oddStr += result[i];
      }
    }

    result = evenStr + oddStr;

    if (result === str) {
      step = iterations - (iterations % step);
    }

    step += 1;
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const strNumber = `${number}`;
  const digitsArr = Array.from(strNumber);

  let i = digitsArr.length - 2;
  while (i >= 0 && digitsArr[i] >= digitsArr[i + 1]) i -= 1;
  if (i === -1) {
    return number;
  }

  let j = digitsArr.length - 1;
  while (digitsArr[j] <= digitsArr[i]) j -= 1;

  [digitsArr[i], digitsArr[j]] = [digitsArr[j], digitsArr[i]];

  let leftDigit = i + 1;
  let rightDigit = digitsArr.length - 1;
  while (leftDigit < rightDigit) {
    [digitsArr[leftDigit], digitsArr[rightDigit]] = [
      digitsArr[rightDigit],
      digitsArr[leftDigit],
    ];
    leftDigit += 1;
    rightDigit -= 1;
  }

  let res = '';
  digitsArr.forEach((el) => {
    res += el;
  });

  return Number(res);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
