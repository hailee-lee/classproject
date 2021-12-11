// 1. a 배열의 마지막에 33 을 추가해주세요

let a = [1, 3, 5, 20]

a.push(33)
console.log(a)


// 2. b 배열의 가장 첫번째 값을 뽑아내어 c에 저장시켜주세요

let b = [2, 4, 10, 50]
let c = b.shift()

console.log(b)//4,10,50


// 3. d 배열에서 3번째부터 7번째 까지 요소를 뽑아내어 e에 저장시켜 주세요

let d = [2, 4, 6, 7, 8, 9, 10, 13, 16, 21, 33, 43]
let e = d.splice(2, 5)

console.log('d:', d)//
console.log(e)//6,7,8,9,10


// 4. f 배열에서 85가 몇번째 index인지 알아보세요

let f = [1, 11, 111, 1111, 32, 45, 85, 123, 85, 1212]
let whereIsEigthfive = f.indexOf(85)
console.log('whereIsEigthfive: ', whereIsEigthfive);

console.log('whereIsThree:', whereIsEigthfive)

// 5. h 배열을 join 으로 합치되 중간에 '-' 이 들어가도록 해주세요

let h = ['010', '0000', '0001']
let joinedA = a.join()
let joinedB = h.join('-')

console.log('joinedA:', joinedA);
console.log('joinedB:', joinedB);
