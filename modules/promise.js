const timerPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("1st");
    //resolve("data info", "data2"); // promise.then 인자로 들어감
    reject("error");
  }, 1000);
});

timerPromise
  .then((data, data2) => {
    console.log("2st");
    console.log("3st");

    //resolve에 들어간 인자값을 받아서 사용
    console.log(data); // "data info"
    console.log(data2); // "undefined"  한 개의 인자만 사용 가능한 것인가?
  })
  .catch((err) => {
    console.log("promise에서 에러 발생 !", err);
  });

// Promise.resolve 함수 인자 사용의 예
const PPromise = Promise.resolve("hohoho");

PPromise.then((data) => {
  console.log(data);
});

//함수를 직접적으로 then에 넘겨서 사용하기 가능
PPromise.then(console.log);

const plusPromise = Promise.resolve(0);
function increment(value) {
  return value + 1;
}

const result = plusPromise.then(increment).then(increment).then(increment); // +1 +1 +1
result.then(console.log);
