// 1. const를 이용해 string형 변수를 선언해보세요
// 변수명: myName    값: 자기이름

const myName = 'wonny'

// 2. let을 이용해 number형 변수를 선언해보세요
// 변수명: age       값: 300

let age = 300

// 3. let을 이용해 boolean형 변수를 선언해보세요
// 변수명: isHappy   값: true

let isHappy = true

// 4. let을 이용해 string형 변수를 선언하고 값을 제거해보세요
// 변수명: nextSchedule     값: study   값 변경: null

let nextSchedule = 'study'
nextSchedule = null





// 1. myCompany 객체를 리터럴 방식으로 만들어보세요
// 객체명: myCompany
// 프로퍼티명: companyName, worker, income
// 값
// companyName = 문자열 아무거나 worker: 숫자값 아무거나 income: 숫자값 아무거나


let myCompany = {
  companyName: 'my company',
  worker: 20,
  income: 10000
}

console.log('myCompany: ', JSON.stringify(myCompany));

// 2. myCompany 객체를 myCompany2 변수에 복사해보세요

let myCompany2 = myCompany

// 3. myCompany2 변수에서 worker 프로퍼티의 값을 30으로 변경해보세요

myCompany2.worker = 30
console.log('myCompany2: ', JSON.stringify(myCompany2));
console.log('myCompany: ', JSON.stringify(myCompany));
