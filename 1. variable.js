// 1. use strict
// added in ES 5
// use this for Vanila Javascript
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
// block scope
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
}
// var (dont't use)
// var hoisting(move declaration from bottom to top)
// has no block scope
{
  age =4;
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// favor imutable data type always for a fwe reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//변경 불가 : Imutable data types: premitive types, frozen objects
//변경 가능 : Mutable data types: all objects by default are mutable in JS

// 4. Variable types
// primitive, single item: numbr, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// number - special numeric values: infinity, -infinity, NaN

// string
const brendan = 'brendan'
const greeting = 'hello' + brendan;
const helloBob = `hi ${brendan}!`;

// boolean
// false: 0 , null, undefined, NaN, ''
// true: any other value

// null
let nothing = null;

// undefined
let x;

// symbol, create unique indentifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSynbol1 = Symbol.for('id');
const gSynbol2 = Symbol.for('id');
console.log(gSynbol1 === gSynbol2); // true

//object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 }
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
// 프로그램이 동작할 때 할당된 값에 따라서 타입 확정
// 대규모 팀 단위 개발 할때 타입충돌...
// 그래서 TypeScript 등장