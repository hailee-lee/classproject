// 앞서 만든 MyCompany 클래스에 함수를 추가해주세요
// increaseWorkerCount: 함수를 실행하면 workerCount가 1씩 증가함
// decreaseWorkerCount: 함수를 실행하면 workerCount가 1씩 감소함

// class MyCompany {
//     companyName = 'yulim'
//     address = 'seoul'
//     workerCount = 100
//     income = 100000

//     increaseWorkerCount() {
//         workerCount = workerCount++
//     }

//     decreaseWorkerCount() {
//         workerCount = workerCount--
//     }
// }



// class MyCompany {
//     companyName = 'yulim'
//     address = 'seoul'
//     workerCount = 100
//     income = 100000
// }

function MyCompany() {
    companyName = 'yulim'
    address = 'seoul'
    workerCount = 100
    income = 100000

    function increaseWorkerCount() {
        workerCount = workerCount++
    }

    function decreaseWorkerCount() {
        workerCount = workerCount--
    }

}

var myCompany1 = new MyCompany()
var myCompany2 = new MyCompany()
var myCompany3 = new MyCompany()
var myCompany4 = new MyCompany()

console.log('myCompany1: ', myCompany1);