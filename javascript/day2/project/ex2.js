// ------- property 사용
// --- mouse event
// const bigBlock = document.querySelector('.big-block')
// console.log('bigBlock: ', bigBlock);

// function bigBlockClick1(event) {
//   console.log('event 11111111: ', event);
// }

// function bigBlockClick2(event) {
//   console.log('event 22222222: ', event);
// }

// bigBlock.onclick = bigBlockClick1
// bigBlock.onclick = bigBlockClick2


// --- keyboard event
// const bigBlock = document.querySelector('.big-block')

// function documentKeyDown(event) {
//   console.log('event: ', event);
// }

// document.onkeydown = documentKeyDown


// --- form event
// const input = document.querySelector('.my-input')

// function inputChangeEvent(event) {
//   console.log('event: ', event);
//   console.log('event.target.value: ', event.target.value);
// }

// input.onchange = inputChangeEvent


// --- page event
// function windowLoad(event) {
//   console.log('event: ', event);
// }
// window.onload = windowLoad



// ------- event listener 사용
// --- mouse event
// const bigBlock = document.querySelector('.big-block')
// console.log('bigBlock: ', bigBlock);

// function bigBlockClick1(event) {
//   console.log('event 11111111: ', event);
// }

// function bigBlockClick2(event) {
//   console.log('event 22222222: ', event);
// }

// bigBlock.addEventListener('click', bigBlockClick1, false)
// bigBlock.addEventListener('click', bigBlockClick2, false)

// // 이벤트 제거
// bigBlock.removeEventListener('click', bigBlockClick2, false)


// --- keyboard event
// const bigBlock = document.querySelector('.big-block')

// function documentKeyDown(event) {
//   console.log('event: ', event);
// }

// document.addEventListener('keydown', documentKeyDown, false)


// --- form event
// const input = document.querySelector('.my-input')

// function inputChangeEvent(event) {
//   console.log('event: ', event);
//   console.log('event.target.value: ', event.target.value);
// }

// input.addEventListener('change', inputChangeEvent, false)


// --- page event
// function windowLoad(event) {
//   console.log('event: ', event);
// }

// window.addEventListener('load', windowLoad, false)


// --- event capturing, bubbling
const bigBlock = document.querySelector('.big-block')
const smallBlock = document.querySelector('.small-block')

function bigBlockClick(event) {
  console.log('bigBlockClick event: ', event);
}

function smallBlockClick(event) {
  console.log('smallBlockClick event: ', event);
}

bigBlock.addEventListener('click', bigBlockClick, true)
smallBlock.addEventListener('click', smallBlockClick, true)
