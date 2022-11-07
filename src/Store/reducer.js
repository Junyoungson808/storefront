let initialState = { customerId: null, items: [] };

const myReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'INITIALIZE':
      return {customerId: payload.id};

    case 'ADD_ITEM':
      return { items: [...items, payload.item] };

    case 'CLEAR':
      return initialState;

    default:
      return state;
  }
}

export const newCart = customer => {
  return {
    type: 'INITIALIZE',
    payload: customer,
  };
};
export const addToCart = customer => {
  return {
    type: 'ADD_ITEM',
    payload: customer,
  };
};
export const clearCart = customer => {
  return {
    type: 'CLEAR',
    payload: customer,
  };
};

export default myReducer;