// --- 변수에 함수를 저장하는 형태
// function sayHello() {
//   console.log('Hi !!!')
// }

// sayHello()

// const myFunc = sayHello
// myFunc()


// --- 함수의 매개변수로 함수를 사용함

// function sayMyName(name) {
//   console.log('my name is ', name);
// }

// function runFunc(someFunction) {
//   someFunction('Lee')
// }

// runFunc(sayMyName)


// --- 함수의 리턴값으로 함수를 사용하기

// function genFunction(name) {
//   function sayMyName() {
//     console.log('my name is ', name);
//   }

//   return sayMyName
// }

// const generatedFunc = genFunction('Kim')
// generatedFunc()


// --- 익명함수

// const noNameFunc = function () {
//   console.log('this is no name function')
// }

// noNameFunc()


// --- 익명함수의 사용 예

// setTimeout(function () {
//   console.log('this is set timeout')
// }, 2000);

// const button = document.querySelector('.function-test')

// button.onclick = function () {
//   console.log('button click !!!')
// }