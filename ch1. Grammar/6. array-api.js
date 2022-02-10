// 1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orage'];
  const result = fruits.join(', ');
  console.log(result);
}

// 2. make an array out of a string
{
  const fruits = 'a, b, c, d';
  const result = fruits.split(', ');
  console.log(result);
}

// 3. make this array look reverse
{
  const array = [1,2,3,4,5];
  array.reverse();
  console.log(array);
}

// 4. make new array without the first two elements
{
  const array = [1,2,3,4,5];
  const result = array.slice(2, 5);
  console.log(result);
}

// 5. find a student with the score 90
class Student {
  constructor(name, age, enrolled, score){
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];


{
  // find -> 인자로 콜백함수를 가지고 그 콜백함수는 return true이면 멈추고 반환
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// 6. make an array of enrolled students
{
  // filter -> 인자로 콜백함수를 가짐, return true이면 배열화해서 반환
  const result = students.filter((student) => student.enrolled);
  console.log(result)
}

// 7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // map -> 인자로 콜백함수, 해당함수를 배열의 각각에 적용해서 배열을 반환
  const result = students.map((student) => student.score);
  console.log(result)
}

// 8. check if ther is a student with the score lower than 50
{
  // some -> 각각 요소에 하나라도 조건에 만족하면 true 반환
  const result1 = students.some((student) => student.score < 50);
  console.log(result1);
  // every -> 각각 요소 모두가 조건에 만족하면 true 반환
  const result2 = !students.every((student) => student.score < 50);
  console.log(result2);
}

// 9. compute students' average age
{
  // reduce -> 배열을 돌면서 어떤 값을 누적할 때 사용
  // return 값이 다음의 prev로 들어감 이니셜 값 = 0 부터
  const result = students.reduce((prev, curr) => prev + curr.score , 0);
  console.log(result)
}

// 10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map((student)=>student.score)
  .filter(score => score >= 50)
  .join();
  console.log(result);
}

// 11. do no.10 in ascending order
// result : '45, 66, 80, 88, 90'
{
  const result = students.map((student) => student.score)
  .sort((a, b) => a-b)
  .join();
  console.log(result);
}