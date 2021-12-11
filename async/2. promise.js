// Promise is a javascript object
// 비동기적인 것을 수행할 때 콜백함수 대신에 쓸 수 있음
// a. state 상태
// pending(진행) -> fulfilled(성공)'resolve' or rejected(실패)'reject'
// b. producer와 consumer 이해

// 1. Producer
// when new Promise is created,
// the executor(callback func) runs automatically, immediately
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...')
  setTimeout(() => {
    //resolve('ellie')
    reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
// 성공하면
promise.then((value) => {
  console.log(value)
})
// 실패하면
.catch(error => {
  console.log(error);
})
// 성공하든 실패하든 무조건 실행
.finally(() => console.log('finally'));

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> resolve(num - 1), 1000);
  });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve,reject) => {
    setTimeout(()=> resolve('닭'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve,reject) => {
    setTimeout(()=> resolve(`${hen} -> 달걀`), 1000);
  });
  const cook = egg =>
  new Promise((resolve,reject) => {
    setTimeout(()=> resolve(`${egg} -> 후라이`), 1000);
  });

getHen()
.then() //.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(console.log); //.then(meal => console.log(meal));