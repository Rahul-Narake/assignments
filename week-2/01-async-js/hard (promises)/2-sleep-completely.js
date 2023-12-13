/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function busy(time) {
  setTimeout(() => {
    for (let i = 0; i < 10000; i++) {
      console.log(i);
    }
  }, time * 1000);
}

async function sleep(seconds) {
  await busy(seconds);
}

sleep(4);
