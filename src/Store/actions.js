export const selectCategory = (category) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: category
  }
}

export const addProduct = (product) => {
  return {
    type: 'ADD',
    payload: product
  }
}