// 1. String concatenation
console.log('my' + 'cat')
console.log('1' + 2)
console.log(`string literals: 1+ 2 = ${1+2}`)

console.log("ellie's \n \t book") //특수문자열

// 2. Numeric operators
console.log(1 + 1) //add
console.log(1 - 1) //substract
console.log(1 / 1) //divide
console.log(1 * 1) //multiply
console.log(1 % 1) //remainder
console.log(1 ** 1) // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter
// counter = counter + 1
// preIncrement = counter

const postIncrement = counter++;
// postIncrement = counter
// counter = counter + 1

const preIncrement = --counter
// counter = counter - 1
// preIncrement = counter

const postIncrement = counter--;
// postIncrement = counter
// counter = counter - 1

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;
// or연산자는 앞에서 부터 하나씩 true가 나오면 뒤는 연산X
// 그래서 함수같은 heavy한 요소들은 가장 뒤쪽에 배치
console.log(`or: ${value1 || value2 || check()}`); 
// and도 false가 나오면 끝
// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableObject != null){
  nullableObject.something;
}
function check() {
  for (let i =0; i <10; i++){
    console.log('wasting time');
  }
  return true;
}

// 7. Equality
// == 들어 있는 값만을 비교
// === 들어 있는 값과 타입도 함께 비교

// 8. Conditional operators: if
// if, else if, else

// 9. Ternary operator: ?
// conditon ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Swich startement
const browser = 'IE';
switch (browser) {
  case 'IE':
  case 'Fireboxx':
    console.log('go away!');
    break;
  case 'Chrome':
    console.log('love you!');
    break;
  default:
    console.log('well...');
    break;
}

// 11. Loops
// - while, do while, for
let i = 3;
while (i > 0) {
  console.log('while');
  i--;
}

do {
  console.log('do while');
  i--;
} while (i > 0);

for (let i = 3; i > 0; i = i -2) {
  //inline variable declaration
  console.log('for')
}

// for of 문
a = ['dream', 'coding', 'ellie']
for (const arg of a) {
  console.log(arg);
}

//nested loops
// 이중포문 등등

// break, continue

