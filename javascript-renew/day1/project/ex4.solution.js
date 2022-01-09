function pagination(page, limit) {
  console.log('page: ', page);
  console.log('limit: ', limit);

  return {
    page: page,
    limit: limit
  }
}

const paginationRes = pagination(1, 10)
console.log('paginationRes: ', paginationRes);