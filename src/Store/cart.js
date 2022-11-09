const initialState = [];

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      let cartAdd = state.filter(product => product.name === action.payload.name)
      return [...cartAdd, action.payload]
    // case 'REMOVE':
    //   let cartRemove = state.filter(product => product.name === action.payload.name)
    //   return [...cartRemove, action.payload]
    // case 'CLEAR':
    //   let cartClear = state.filter(product => product.name === action.payload.name)
    //   return [...cart, action.payload]
    default:
      return state;
  }
}




export default cartReducer;