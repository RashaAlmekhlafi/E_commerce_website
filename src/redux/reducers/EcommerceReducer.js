const initialState={
    ProductData:[{
        "category": " ",
        "description": " ",
        "id": 0,
        "image": " ",
        "price": 0,
        "rating": { "rate": 0, "count": 0 },
        "title": " initial state"
      }],
      cart_items:[],
      
      
}

const EcommerceReducer =(state=initialState,action)=>{
    switch (action.type){
        case"StoreData":
        return {
            ...state,
            ProductData: action.payload
        }
        case"addToCart":
        return {
            ...state,
            cart_items: [...state.cart_items,action.payload],
            cart_counter:state.cart_counter+1
        }
        case"removeFromCart":
        return {
            ...state,
            cart_items: state.cart_items.filter((cart_item)=> cart_item!==action.payload),
            cart_counter:state.cart_counter-1
        }
        
        default:
            return state;
    }
}
export default EcommerceReducer