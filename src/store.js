import { createStore , combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {productDetailsReducer ,productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers'

const reducers = combineReducers({
    productList : productListReducer ,
    productListDetails : productDetailsReducer, 
    cartItems :cartReducer, 
});

const initialState = {};

const middleWare = [thunk];

const store  = createStore(reducers , initialState , composeWithDevTools(applyMiddleware(...middleWare)));

export default store;