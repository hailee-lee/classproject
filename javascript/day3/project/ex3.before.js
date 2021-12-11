let i = 0
let evenSum = 0

while (true) {
    i++
    console.log('i: ', i);

    if (i % 2 === 0) {
        evenSum = evenSum + i
        console.log('evenSum: ', evenSum);
    }

    if (100 < i) { break; }

}


