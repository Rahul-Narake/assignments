/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

<<<<<<< HEAD
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
=======
function wait1(t) {

}

function wait2(t) {

}

function wait3(t) {

}

function calculateTime(t1, t2, t3) {

}

module.exports = calculateTime;
>>>>>>> a39ff95b395681909e6fa6721382e1bd6578d9de
