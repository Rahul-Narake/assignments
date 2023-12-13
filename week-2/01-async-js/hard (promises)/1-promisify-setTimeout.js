/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello from rahul');
    }, n * 1000);
  });
}

const p = wait(4);
p.then((data) => {
  console.log(data);
});
