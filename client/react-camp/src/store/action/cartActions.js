export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_TO_CART = "REMOVE_TO_CART"
export const REMOVE = "REMOVE"
export function addToCard(product){
    return {
        type :ADD_TO_CART,
        payload : product
    }
}

export  function removeFromCart(product){
    return{
        type : REMOVE_TO_CART,
        payload : product
    }

}

export function remove(){
    return {
    type : REMOVE
}
}