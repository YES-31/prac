function first() {
  console.log("1st");
}

//1000ms(1초) 후에 first 함수를 실행하는 명령
setTimeout(first, 1000);

console.log("2st");
console.log("3st");

/*
실행 결과
2st
3st
1st
*/
