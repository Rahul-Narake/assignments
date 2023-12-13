/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved after 1 sec');
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved after 2 sec');
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved after 3 sec');
    }, 3000);
  });
}

async function calculateTime() {
  const start = Date.now();
  await waitOneSecond().then((value) => {
    console.log(value);
  });
  await waitTwoSecond().then((value) => {
    console.log(value);
  });
  await waitThreeSecond().then((value) => {
    console.log(value);
  });
  const end = Date.now();
  console.log(end - start);
}

calculateTime();
