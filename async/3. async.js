// async & await
// clear style of using promise!!

// 1. async
// 함수앞에 async가 있으면 내용물을 Promise화 해줌
async function fetchUser() {
  // do network request
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return 'apple';
}

async function getBanana() {
  await delay(3000);
  return 'banana';
}

//try catch로 resolve rejection 기능
async function pickFruits() {
  // 동시에 미리 실행하고
  const applePromise = getApple();
  const bananaPromise = getBanana();
  // 불러옴
  const apple = await applePromise();
  const banana = await bananaPromise();
  return `${apple} + ${banana}`;
}

/*
function pickFruits() {
  return getApple()
  .then(apple => {
    return getBanana()
    .then(banana => `${apple} + ${banana}`);
  });
}
*/

pickFruits().then(console.log);


// 3. useful Promise APIs
// 전부 실행완료를 기다렸다가 한번에 전달
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log)

//먼저 실행되는 아이 하나만 전달
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log)