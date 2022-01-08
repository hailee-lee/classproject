// setInterval 사용해보기
// setInterval(실행할 함수, 실행주기)
// clearInterval(정지시킬 setInterval)

// sum 변수 선언하기: 초기값 0
// setInterval
//    sum 변수가 1초 지날때 마다 10씩 증가함 
//    증가한 sum을 console.log 로 찍어주세요

// button의 click 이벤트에 clearInterval 로직이 들어있는 함수를 바인딩 시켜주세요

let sum = 0

let a = setInterval(function () {
    sum = sum + 10
    console.log('sum:', sum)
}, 1000)

let stop = document.querySelector(".stop-interval")
stop.addEventListener("click", function () {
    clearInterval(a)
})


