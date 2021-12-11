// const qqImage = document.querySelector('.qq-image')
// const qqHome = document.querySelector('.qq-home')
// const qqButton = document.querySelector('.qq-button')

const image = document.querySelector('.qq-image')
console.log('image:', image)
const qqHome = document.querySelector('.qq-home')
console.log('Home', qqHome)
const button = document.querySelector('.qq-button')
console.log('button:', button)




let move = 70
let isQQHome = false

function imageqq() {

  if (isQQHome) return

  move = move + 70
  image.style.left = move + 'px'

  const imageRect = image.getBoundingClientRect()
  const qqHomeRect = qqHome.getBoundingClientRect()
  console.log('image:', imageRect)
  console.log('Home:', qqHomeRect)

  if (imageRect.right > qqHomeRect.left) {
    console.log('쿼카가 집에 도착했어요!')
    alert('쿼카가 집에 도착했어요!')
    isQQHome = true
  }

}
button.onclick = imageqq





// let isQQHome = false
// let qqImageLeft = 0;


// function qqGoHome() {

//   if (isQQHome) return

//   const qqImageRect = image.getBoundingClientRect()
//   const qqHomeRect = qqHome.getBoundingClientRect()

// }

// qqButton.onclick = qqGoHome
