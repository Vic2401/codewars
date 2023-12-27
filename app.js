const numbers = ["1233"];

function multiplyOfNumbers(arr) {
  return arr.reduce(function (done, curr) {
    return done * multiplyOfNumbers(curr);
  }, 1);
}
console.log(multiplyOfNumbers(numbers));
/*
function solution(s) {
  return (s + "_").match(/.{2}/g) || [];
}*/
