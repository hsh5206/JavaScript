// 콜백함수 -> 콜백함수를 전달하면 나중에 실행해줌
// javascript -> 동기적(호이스팅 이후 하나씩 실행)

// 비동기
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// sync 콜백
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// async 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);


// callback hell
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(()=> {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(()=> {
      if (user === 'ellie') {
        onSuccess({name: 'ellie', role:'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `hellow ${user.name}, you have a ${userWithRole.role} role`
        );
      },
      ellro => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);