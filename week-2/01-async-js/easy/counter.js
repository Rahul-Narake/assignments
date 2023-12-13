// const interval = setInterval(() => {
//   count += 1;
//   console.log(count);
// }, 1000);

function updateCounter() {
  // Get the current value of the counter element

  let count = 0;
  // Increment the counter
  count++;

  console.log(updateCounter);
  // Update the counter element with the new value

  // Call the function again after 1000 milliseconds (1 second)
  setTimeout(updateCounter, 1000);
}

// Initial call to start the counter
updateCounter();
