// --- 클래스 선언

// class Person {
//   name = 'kim'
//   age = 30
//   height = 190
//   weight = 100
// }

// --- 클래스 사용

// const kim = new Person()

// console.log('kim: ', kim);
// console.log('kim.name: ', kim.name);
// console.log('kim.age: ', kim.age);
// console.log('kim.height: ', kim.height);
// console.log('kim.weight: ', kim.weight);

// --- 클래스 함수 선언

// class Person {
//   name = 'kim'
//   age = 30
//   height = 190
//   weight = 100

//   sayHi() {
//     console.log('Hi !!')
//   }
// }

// const kim = new Person()
// kim.sayHi()

// --- 클래스 멤버함수에서 멤버변수에 접근
// class Person {
//   name = 'kim'
//   age = 30
//   height = 190
//   weight = 100

//   sayHi() {
//     console.log('Hi !!')
//   }

//   sayMyName() {
//     console.log('my name is ', this.name);
//   }
// }

// const kim = new Person()
// kim.sayMyName()


// --- 클래스 constructor

// class Person {
//   name = 'kim'
//   age = 30
//   height = 190
//   weight = 100

//   constructor(name, age, height, weight) {
//     if (name) this.name = name
//     if (age) this.age = age
//     if (height) this.height = height
//     if (weight) this.weight = weight
//   }

//   sayHi() {
//     console.log('Hi !!')
//   }

//   sayMyName() {
//     console.log('my name is ', this.name);
//   }
// }

// const lee = new Person('lee', 20, 200, 150)
// lee.sayMyName()

// --- 클래스 멤버함수를 통한 멤버변수 변경

// class Person {
//   name = 'kim'
//   age = 30
//   height = 190
//   weight = 100

//   constructor(name, age, height, weight) {
//     if (name) this.name = name
//     if (age) this.age = age
//     if (height) this.height = height
//     if (weight) this.weight = weight
//   }

//   sayHi() {
//     console.log('Hi !!')
//   }

//   sayMyName() {
//     console.log('my name is ', this.name);
//   }

//   changeMyName(newName) {
//     this.name = newName
//   }
// }

// const lee = new Person('lee', 20, 200, 150)
// lee.sayMyName()
// lee.changeMyName('park')
// lee.sayMyName()

