import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './reducer';

let reducers =  combineReducers({
  cart: cartReducer,
  // more reducers could be present as key: value pairs.
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}