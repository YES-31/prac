const timerPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("1st");
    resolve("data info", "data2"); // promise.then 인자로 들어감
  }, 1000);
});

timerPromise.then((data, data2) => {
  console.log("2st");
  console.log("3st");

  //resolve에 들어간 인자값을 받아서 사용
  console.log(data); // "data info"
  console.log(data2); // "undefined"  한 개의 인자만 사용 가능한 것인가?
});
