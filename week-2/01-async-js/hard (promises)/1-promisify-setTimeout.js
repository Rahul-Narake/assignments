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

module.exports = wait;
//>>>>>>> a39ff95b395681909e6fa6721382e1bd6578d9de
