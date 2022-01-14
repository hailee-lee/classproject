const list = document.querySelector('.list')
console.log('list: ', list);

// // --- 자식 노드 탐색

// // 자식 요소 목록 조회
// list.childNodes
// console.log('list.childNodes: ', list.childNodes);
// list.children
// console.log('list.children: ', list.children);

// // 첫번째 자식 요소
// list.firstChild
// console.log('list.firstChild: ', list.firstChild);
// list.firstElementChild
// console.log('list.firstElementChild: ', list.firstElementChild);

// // 마지막 자식 요소
// list.lastChild
// console.log('list.lastChild: ', list.lastChild);
// list.lastElementChild
// console.log('list.lastElementChild: ', list.lastElementChild);


// // --- 부모 노드 탐색

// const item1 = document.querySelector('.item1')

// item1.parentNode
// console.log('item1.parentNode: ', item1.parentNode);
// item1.parentElement
// console.log('item1.parentElement: ', item1.parentElement);


// // --- 형제 노드 탐색

// const item3 = document.querySelector('.item3')

// // 이전 요소
// item3.previousSibling
// console.log('item3.previousSibling: ', item3.previousSibling);
// item3.previousElementSibling
// console.log('item3.previousElementSibling: ', item3.previousElementSibling);

// // 다음 요소
// item3.nextSibling
// console.log('item3.nextSibling: ', item3.nextSibling);
// item3.nextElementSibling
// console.log('item3.nextElementSibling: ', item3.nextElementSibling);

// --- 노드 생성, 삽입, 삭제
// 노드 생성
const newLi = document.createElement('li')
newLi.textContent = 'this is new node'

// 노드 삽입
list.appendChild(newLi)

const newLiSecond = document.createElement('li')
newLiSecond.textContent = 'before'

list.insertBefore(newLiSecond, list.firstChild)

// 노드 삭제
list.removeChild(document.querySelector('.list .item3'))