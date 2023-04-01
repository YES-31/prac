const timerPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("1st");
    resolve();
  }, 1000);
});

timerPromise.then(() => {
  console.log("2st");
  console.log("3st");
});
