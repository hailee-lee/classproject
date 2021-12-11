// ImageMovableClass 를 만들어보세요

// 멤버변수: 
//    image : image DOM을 저장하는 멤버변수
//    left : image 의 left 좌표값을 저장하는 멤버변수
//    top : image 의 top 좌표값을 저장하는 멤버변수
//    moveDistance: 방향키를 눌렀을 때 움직이는 거리. 기본값 30

// constructor:
//    image, left, top 의 초기값을 설정해줌
//    window.onkeydown 이벤트에 moveArrow 함수를 바인딩함

// 멤버함수:
//    changeDistance: 매개변수로 숫자를 받고, 받은 매개변수로 moveDistance를 변경함
//    moveArrow: 키보드 이벤트를 입력받고, 
//               키보드의 code값이 방향키일 경우 해당 방향으로 이미지를 이동시켜주는 로직을 구현

// 사용
// const qqImage = document.querySelector('.qq-image')
// const qqImageMovable = new ImageMovableClass(qqImage)