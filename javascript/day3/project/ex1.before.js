function numberChecker(number) {
  //   if (number === 1) {
  //     console.log('this number is 1')
  //   } else if (number === 2) {
  //     console.log('this number is 2')
  //   } else if (number === 3) {
  //     console.log('this number is 3')
  //   } else if (number === 4) {
  //     console.log('this number is 4')
  //   } else {
  //     console.log('this is not my number')
  //   }


  switch (number) {
    case 1:
      console.log('this is number 1')
      break;

    case 2:
      console.log('this is number2')
      break;

    case 3:
      console.log('this is number3')
      break;

    case 4:
      console.log('this is number4')
      break;

    default:
      console.log('what?')
      break;
  }
}
numberChecker(1)

