import { bindActionCreators } from 'redux'
import { ADD_TO_CART ,GET_CART_ITEMS} from '../constants/addToCartConstants'

export const cartReducer = (state = {addedToCart:[]} , action)=>{
switch(action.type){
    case ADD_TO_CART:
        return {addedToCart : action.payload}
    case GET_CART_ITEMS:
        return {addedToCart : action.payload}
    default:
        return state
    }


}