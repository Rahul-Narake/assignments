const showTime = () => {
  const date = new Date();
  let time = `${date.getHours()}::${date.getMinutes()}::${date.getSeconds()}${
    date.getHours() > 12 ? ' PM' : ' AM'
  }`;

  console.log(time);
  setInterval(showTime, 1000 * 60);
};
showTime();
