import { ADD_TO_CART } from '../constants/addToCartConstants'

export const cartReducer = (state = {addedToCart:[]} , action)=>{
switch(action.type){
    case ADD_TO_CART:
        return {addedToCart : action.payload}
    default:
        return state
    }


}