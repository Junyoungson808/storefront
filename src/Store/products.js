const initialState = [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5, image:`${process.env.PUBLIC_URL}/images/computer.jpg` },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, image:`${process.env.PUBLIC_URL}/images/computer.jpg` },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, image:`${process.env.PUBLIC_URL}/images/computer.jpg` },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, image:`${process.env.PUBLIC_URL}/images/computer.jpg` },
    { name: 'Apples', category: 'food', price: .99, inStock: 500, image:`${process.env.PUBLIC_URL}/images/computer.jpg` },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, image:`${process.env.PUBLIC_URL}/images/computer.jpg` },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90, image:`${process.env.PUBLIC_URL}/images/computer.jpg` },
  ];

function productReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default productReducer;