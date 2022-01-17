export const getPagesCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}

export const getPagesCountArray = (total, start = 1) => {
  return [...Array(total - start + 1).keys()].map(x => x + start);
}
