// ------ 변수 선언하기

// var를 통한 변수선언
// 데이터의 형식을 바꿀 수 있다.
var firstValue = 'this is data'
console.log('firstValue: ', firstValue);

firstValue = 20
console.log('firstValue: ', firstValue);

// let, const
let myValue = 'this is my data'
console.log('myValue: ', myValue);

const myConstValue = 'origin value'
console.log('myConstValue: ', myConstValue);

// myConstValue = 'new Value' // error

// ------ 변수 타입

let num = 10
let str = 'string'
let isLoading = false


let test
console.log('test: ', test);
let empty = null
console.log('empty: ', empty);


// null 사용해보기

let something = 'this is value'
console.log('something: ', something);
something = null
console.log('something: ', something);


// 집합형

// 배열 선언
let numList = [1, 2, 3, 4, 5, 6, 7]
console.log('numList: ', numList);
console.log('numList[2]: ', numList[2]);

// object 선언
let aboutMe = {
  name: 'KIM',
  age: 20,
  height: 190,
  weight: 100
}
console.log('aboutMe: ', aboutMe);

// 속성값 접근
console.log('aboutMe.name: ', aboutMe.name);
console.log('aboutMe[name]: ', aboutMe['name']);

// 속성값 변경
console.log('aboutMe.age: ', aboutMe.age);
aboutMe.age = 30
console.log('aboutMe.age: ', aboutMe.age);
