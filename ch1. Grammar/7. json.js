// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDates: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};
// 객체내부의 함수는 json화에 제외
json = JSON.stringify(rabbit);
console.log(json);
// 이름만 전달 (배열 이용)
json = JSON.stringify(rabbit, ['name']);
console.log(json);
// 콜백함수로 해당 값 변환해서 전달
json = JSON.stringify(rabbit, (key, value) =>{
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj)

//아래의 getDate 에러를 수정해주는 콜백함수를 이용
const obj = JSON.parse(json, (key, value) => {
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj)
console.log(rabbit.birthDates.getDate());
console.log(obj.birthDate.getDate()); // 에러 string이여서 getDate사용불가

// JSON Diff -> http://jsondiff.com (받아온 json파일 비교)
// JSON Beautifier -> https://jsonbeautifier.org (json파일 이쁘게)
// JSON Parser -> https://jsonparser.org (json 파일을 object로 보여줌)
// JSON Validator -> https://tools.learningcontainer.com/json-validator/ (json파일의 문법 체크)
