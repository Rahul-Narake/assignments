let nums = [1, 3, 4, 5, 6];

const sum = nums.reduce((num1, num2) => {
  return num1 + num2;
});

console.log(sum / nums.length);
