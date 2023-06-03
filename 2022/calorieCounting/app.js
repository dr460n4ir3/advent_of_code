import * as fs from 'fs';
import * as path from 'path';

const __dirname = path.resolve();
const filePath = (__dirname, 'test.txt'); // let program know where to find the input file

// the following function will return an array of sums
const findInput = (filePath) => {
  try {
    const testInput = fs.readFileSync(filePath, 'utf-8');
    const inputArray = testInput.split('\n'); // split the input into an array of lines

    let currentSum = 0;
    const sumArray = inputArray.reduce((acc, line, index) => {
      const trimmedLine = line.trim(); // remove any whitespace

      if (trimmedLine === '') {
        acc.push(currentSum);
        currentSum = 0;
      } else {
        const number = parseInt(trimmedLine);
        if (!isNaN(number)) {
          currentSum += number;
        }
      }

      if (index === inputArray.length - 1) {
        acc.push(currentSum);
      }

      return acc;
    }, []);

    return sumArray; // return the array of sums
  } 
  catch (error) {
    console.error('Error:', error); // if there is an error, return an error message
    return [];
  }
};

// the following function will return the highest sum
const returnHighest = (filePath) => {
  const sumArray = findInput(filePath);
  return Math.max(...sumArray);
};

// the following function will return the top 3 highest sums
const returnTopThree = (filePath) => {
  const sumArray = findInput(filePath);
  const sortedArray = sumArray.sort((a, b) => b - a);
  return sortedArray.slice(0, 3);
};

// the following function will return the sum of the top 3 highest sums
const returnSumOfTopThree = (filePath) => {
  const topThree = returnTopThree(filePath);
  return topThree.reduce((acc, num) => acc + num, 0);
};

console.log(findInput(filePath)); // part 1
console.log(returnHighest(filePath)); // part 1- continued
console.log(returnTopThree(filePath)); // part 2
console.log(returnSumOfTopThree(filePath)); // part 2 - continued


// Path: calorieCounting/app.js