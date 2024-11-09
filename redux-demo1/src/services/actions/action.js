import {ADD_TO_CART, REMOVE_TO_CART} from '../constant.js'

export const addToCart =(data)=>{
     console.log("action",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}

export const removeToCart =()=>{
    //console.log("action",data)
   return {
       type:REMOVE_TO_CART,
   }
}