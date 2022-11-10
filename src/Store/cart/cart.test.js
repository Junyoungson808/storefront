import cartReducer  from'./cart';
import {legacy_createStore as createStore, combineReducers } from 'redux';
import { addProduct } from '../actions';

/**
 * example state 
 * {productsInCart: [], }
 * 
 */

describe('Cart Reducer', () => {
  // combine reducers as in index.js
  const reducers = combineReducers({
    cart: cartReducer,
  });
  // createStore to provide
  const store = createStore(reducers);

  //initial state
  //add to state. add some random object.
  it('provides initial state', () => {
    let state = store.getState();
    expect(state.cart.productsInCart.length).toEqual(0);
    expect(state.cart.productsInCart).toBeTruthy();
  });
  it('can successfully add product to cart', () => {
    let state = store.getState();
    expect(state.cart.productsInCart.length).toEqual(0);
    expect(state.cart.productsInCart).toBeTruthy();

    let productOne = {name: 'product one', price: 5 }
    let productTwo = {name: 'product two', price: 10 }

    store.dispatch(addProduct(productOne));
    store.dispatch(addProduct(productTwo));
    expect(state.cart.productsInCart.length).toEqual(2);
    expect(state.cart.productsInCart[0].name).toEqual('product one');
    expect(state.cart.productsInCart[1].name).toEqual('product two');
  });
  it('can successfully remove product from the cart', () => {
    let state = store.getState();
    let productOne = {name: 'product one', price: 5 }
    let productTwo = {name: 'product two', price: 10 }

    store.dispatch(addProduct(productOne));
    expect(state.cart.productsInCart.length).toEqual(1);
    expect(state.cart.productsInCart[0].name).toEqual('product one');
    store.dispatch(addProduct(productTwo));
    state = store.getState();
    expect(state.cart.productsInCart.length).toEqual(0);
  });

});