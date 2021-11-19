const qqImage = document.querySelector('.qq-image')
const qqHome = document.querySelector('.qq-home')
const qqButton = document.querySelector('.qq-button')

let isQQHome = false
let qqImageLeft = 0;


function qqGoHome() {

  if (isQQHome) return

  const qqImageRect = qqImage.getBoundingClientRect()
  const qqHomeRect = qqHome.getBoundingClientRect()

}

qqButton.onclick = qqGoHome
