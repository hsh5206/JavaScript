// Object-Oriented Programming
// class: template
// object: instance of a class
// JavaScript class on ES6

// 1. Calss declarations
class Person {
  //생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`)
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
ellie.speak();

// 2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  // 호출 : getter 호출
  // 값 할당 : setter 호출

  // getter와 setter 안의 변수랑 생성자 안의 변수가 같으면 무한반복
  // 이유 : value를 this.age에 할당할 때, setter를 호출하여 할당하는데
  // 내부에 this.age가 있으면 다시 setter를 호출하여 무한반복
  get age() {
    return this._age;
  }
  
  set age(value) {
    if (value < 0) {
      throw Error(`age can not be negative`);
    }
    this._age = value;
    // this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User('Steve', 'Job', -1);

// 3. Fields (public, private)
// 최신 문법이라 아직 사용 X
class Experiment {
  publicField = 2;
  #priavateField = 0;
}

// 4. Static properties and methods
// 최신 문법
// 클래스 자체에 메소드가 귀속되어 있게 만들어줌
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  
  static printPublisher() {
    console.log(article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);

// 5. Inheritance 상속과 다양성
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return width * this.height;
  }
}
// Shape를 상속
class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    // super -> 부모의 함수를 호출한다. 뒤에 이어서 함수 수정가능
    super.draw();
    console.log('삼각형!');
  }
  // 오버라이딩 : shpae내의 함수를 덮어서 쓴다
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');
rectangle.draw();

// 6. Class checking: instanceOf
// a instanceof b -> a는 b의 자식인가
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
