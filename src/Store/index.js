import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './products';
import categoryReducer from './categories';
import cartReducer from './cart/cart';

let reducers =  combineReducers({
  categories: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
});

function store(){
  return createStore(reducers, composeWithDevTools());
}

export default store();