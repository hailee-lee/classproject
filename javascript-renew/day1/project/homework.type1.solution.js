function pagination(page, limit) {

  // 페이지값이 1보다 작을 경우 에러처리
  if (page < 1) return

  const start = (page - 1) * limit
  const end = start + limit
  const list = MockData.slice(start, end)
  const totalItems = MockData.length
  const totalPage = Math.ceil(totalItems / 10)

  return {
    list,
    currentPage: page,
    totalPage,
    totalItems
  }
}

const res = pagination(1, 10)
console.log('res: ', res);