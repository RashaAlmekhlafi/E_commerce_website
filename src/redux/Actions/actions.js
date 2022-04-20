export const StoreData= (Data)=>{
   
    return {
        type:"StoreData",
        payload: Data
        
    }
}

export const addToCart= (id)=>{
   
    return {
        type:"addToCart",
        payload: id
        
    }
}
export const removeFromCart= (id)=>{
   
    return {
        type:"removeFromCart",
        payload: id
        
    }
}
