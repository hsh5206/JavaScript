// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0])

// 3. Looping over an array
// print all fruits

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// 배열안에 들어 있는 value들 마다 함수 실행
fruits.forEach((fruit) => {
  console.log(fruit);
})

// 4. Add, delete, copy
// push 뒤에서 넣기
fruits.push('strawberry', 'peach');
console.log(fruits);
// pop 뒤에서 빼기 그 값을 return
const poped = fruits.pop();
fruits.pop();
console.log(fruits);
// unshift 앞에서 넣기
fruits.unshift('strawberry');
console.log(fruits);
// shift 앞에서 빼기
fruits.shift();
console.log(fruits);
// shift와 unshift는 push와 pop에 비해 너무너무 느림
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits)
fruits.splice(1); // 특정인덱스부터 전부 삭제
console.log(fruits)
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits)
fruits.splice(1, 1); //특정인덱스부터 1개 삭제
console.log(fruits)
fruits.splice(1, 1,'apple','melon'); //특정인덱스 부터 1개 삭제하고 그자리에 추가
console.log(fruits)

// concat (combine two arrays) 배열 합치기 return -> 배열
const fruits2 = ['a', 'b'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.log(newFruits);

// indexOf
// 배열안에 apple이 몇 번째에 있는지
console.log(newFruits.indexOf('apple'));
// 배열안에 hahahahah가 몇 번째에 있는지 없으면 -1 리턴
console.log(newFruits.indexOf('hahahahah'));

// includes
// 배열안에 melon이 있는지 return -> true, false
console.log(newFruits.includes('melon'));

//lastIndexOf
// 배열안에 해당값이 있는 마지막 인덱스 반환