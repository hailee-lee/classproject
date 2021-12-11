const image = document.querySelector('.qq-image')
console.log('image:', image)

const button = document.querySelector('.qq-button')
console.log('button:', button)


let move = 10

function imageqq() {
    move = move + 10
    image.style.left = move + 'px'
}
button.onclick = imageqq
