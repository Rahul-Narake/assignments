/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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
  let promises = [waitOneSecond(), waitTwoSecond(), waitThreeSecond()];
  const start = Date.now();
  await Promise.all(promises).then((value) => {
    console.log(value);
    const end = Date.now();
    console.log(end - start);
  });
}

calculateTime();

function wait1(t) {}

function wait2(t) {}

function wait3(t) {}

function calculateTime(t1, t2, t3) {}

module.exports = calculateTime;
