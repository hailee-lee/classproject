// --- 전역에서의 this

// console.log('this: ', this);


// --- 함수 안에서의 this

// function forThis() {
//   console.log('this: ', this);
// }

// forThis()


// --- 클래스 안에서 this

// class ForThisClass {
//   showThis() {
//     console.log('this: ', this);
//   }
// }

// const test = new ForThisClass()
// test.showThis()


// --- 이벤트 안에서 this

// document.body.onclick = function () {
//   console.log('this: ', this);
// }

// document.body.addEventListener('click', function () {
//   console.log('this: ', this);
// })


// --- 함수의 함수에서 this

// document.body.onclick = function () {

//   function inner() {
//     console.log('this: ', this);
//   }

//   inner()
// }