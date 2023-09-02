'use strict';
// const x = 23;
// console.log(x);
//BUG;

const calcMaxNum = function (nums) {
  let max = nums[0];
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    if (typeof curNum !== 'number') continue;
    if (curNum > max) max = curNum;
    if (curNum < min) min = curNum;
  }
  console.log('maximum number: ' + max);
  console.log('minimum number: ' + min);
  return max - min;
};
const numbers = [3, 7, 5, 'error', 9];
const numbers2 = [6, -4, 8, 'error', -1];
const numbersMerged = numbers.concat(numbers2);
console.log('difference between max and min: ' + calcMaxNum(numbersMerged));

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Enter temp in degrees celsius')),
  };
  console.log(
    'temp in celsius: ' + measurement.value + ' degree ' + measurement.unit
  );
  const kelvin = measurement.value + 273;
  return kelvin;
};
// console.log('temp in kelvin: ' + measureKelvin() + ' kelvin');

const printForecast = function (arr) {
  let message = ' ... ';
  for (let i = 0; i < arr.length; i++) {
    message = message.concat(arr[i] + '\xB0' + `C in ${i + 1} days ... `);
  }
  return message;
};
console.log(printForecast([20, 30, 40]));
