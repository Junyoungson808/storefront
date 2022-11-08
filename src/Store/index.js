import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './products';
import categoryReducer from './categories';

let reducers =  combineReducers({
  categories: categoryReducer,
  products: productsReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}