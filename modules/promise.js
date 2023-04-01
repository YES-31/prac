const timerPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("1st");
    resolve("data info"); // promise.then 인자로 들어감
  }, 1000);
});

timerPromise.then((data) => {
  console.log("2st");
  console.log("3st");

  //resolve에 들어간 인자값을 받아서 사용
  console.log(data)
});
