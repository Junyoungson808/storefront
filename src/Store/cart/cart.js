// const initialState = [];

// function cartReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD':
//       let cartAdd = state.filter(product => product.name === action.payload.name)
//       return [...cartAdd, action.payload]
//     case 'REMOVE':
//       let cartRemove = state.filter(product => product.name === action.payload.name)
//       return [...cartRemove, action.payload]
//     // case 'CLEAR':
//     //   let cartClear = state.filter(product => product.name === action.payload.name)
//     //   return [...cart, action.payload]
//     default:
//       return state;
//   }
// }

const initialState = {
  productsInCart: [],

};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      //do we need quantity? 
      //do we need to adjust inventory? (productReducer)
      // let cartAdd = state.filter(product => product.name === action.payload.name)
      return {
        productsInCart: [...state.productsInCart, action.payload]
        // productsInCart: [...state.productsInCart, {...action.payload, qty: 1}]
      }
    case 'REMOVE':
      //do we remove ALL the quantity or one? 
      //do we we manage a quantityInCart property?
      return {
        productsInCart: [...state.productsInCart.filter(product => product.name !== action.payload.name), action.payload]
      }
    default:
      return state;
  }
}


// export const addToCart = (product) => {
//   return {
//     product.name === action.payload.name),
//   }


  export default cartReducer;