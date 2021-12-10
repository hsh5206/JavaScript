// 1. Function declaration
// function name(param1, param2) {body... return;}
// naming : doSomething, verb
// one function -> one thing
// function is object in JS

function printMessage(message) {
  console.log(message);
}

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by referance
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6) 배열
function printAll(...args) {
  for(let i =0; i<args.length;i++){
    console.log(args[i]);
  }
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global' // global variable
function printMessage(){
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMEssage = 'hello'; // local vaiable
  }
  // return undefined   -> 생략돼있음
}
printMessage();

// 6. Return a value
function sum(a,b) {
  return a + b;
}
const result = sum(1, 2);

// Early return, early exit
// bad
function upgradeUser(user) {
  if(user.point > 10) {
    //...
  }
}
// good
function upgradeUser(user) {
  if(user.point <= 10){
    return;
  }
  // ...
}

// 7. Function expression
// anonymous function 익명함수
const print = function () {
  console.log('print');
};
print();

// function declaration 선언함수 -> 호이스팅 기능
function print() {
  console.log('print')
}

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if(answer === 'love you'){
    printYes();
  }
  else {
    printNo()
  }
}
const printYes = function (){
  console.log('yes!');
};
//named function 이름을 정해줌
const printNo = function print(){
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);

// Arrow function 화살표 함수
// always anonymous
const simplePrint = function () {
  console.log('simplePrint!');
}
const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;
const simpleMultiply = (a,b) =>{
  // do something
  return a * b;
;}

// IIFE : Imediately Invoked Function Expression
// 함수를 바로 실행 하고 싶을 때
(function hello() {
  console.log('IIFE');
})();