// MyCompany Class 만들기
// 멤버변수
// companyName, address, workerCount, income

class MyCompany {
    companyName = 'yulim'
    address = 'seoul'
    workerCount = 100
    income = 100000

    sayHi() {
        console.log("Hi!!!")
    }

    sayMyAddress() {
        console.log('my address is !!!!!', this.address);
    }

    constructor(companyName, address, workerCount, income) {
        if (companyName) this.companyName = companyName
        if (address) this.address = address
        if (workerCount) this.workerCount = workerCount
        if (income) this.income = income

    }
}
const yulim = new MyCompany('wonseok', 'incheon', 100, 200000)
const yulim1 = new MyCompany('wonseok1', 'incheon', 100, 200000)
console.log('yulim1: ', yulim1);
const yulim2 = new MyCompany('wonseok2', 'incheon', 100, 200000)
console.log('yulim2: ', yulim2);
const yulim3 = new MyCompany('wonseok3', 'incheon', 100, 200000)
console.log('yulim3: ', yulim3);
const yulim4 = new MyCompany('wonseok4', 'incheon', 100, 200000)
console.log('yulim4: ', yulim4);
const yulim5 = new MyCompany('wonseok5', 'incheon', 100, 200000)
console.log('yulim5: ', yulim5);
const yulim6 = new MyCompany('wonseok6', 'incheon', 100, 200000)
console.log('yulim6: ', yulim6);

yulim.sayHi()
yulim.sayMyAddress()

console.log(yulim)