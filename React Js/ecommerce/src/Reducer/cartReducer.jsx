const cartReducer = (state,action) => {
  
    
    switch(action.type){
        
        case 'ADD_TO_CART' :
        let {id, color, amount, product} = action.payload 
        // console.log(product);


        let exsitingProducts = state.cart.find((curElem) => curElem.id === id + color );

        if (exsitingProducts) {
            let updatedProducts = state.cart.map((curElem) => {
                if (curElem.id === id + color) {
                    let newamount = curElem.amount + amount ;

                    if (newamount >= curElem.max) {
                        newamount = curElem.max;
                    }
                    return {
                        ...curElem,
                        amount: newamount,
                    }
    
                    
                } else {
                    return curElem;
                }
            });
            return {
                ...state,
                cart : updatedProducts
            }
        } else {
            
            let cartProduct;
    
            cartProduct = {
                id : id + color,
                name : product.name,
                color,
                amount,
                image : product.image[0].url,
                price : product.price,
                max : product.stock
    
            }
            return {
                ...state,
                cart : [...state.cart,cartProduct]
            }
        }

        case 'SET_DECREMENT' : 
        let decraesProduct = state.cart.map((curElem)=> {
            if (curElem.id === action.payload) {
                let decAmount = curElem.amount - 1;
                // console.log(decAmount);
                if (decAmount <= 1) {
                    decAmount = 1
                }
                return {
                    ...curElem,
                    amount : decAmount,
                };
            } else {
                return curElem;
            }
                
        })

        return {
            ...state,
            cart : decraesProduct,
        }

        case 'SET_INCREMENT' : 
        let increaseProduct = state.cart.map((curElem)=> {
            if (curElem.id === action.payload) {
                let inceAmount = curElem.amount +1 ;
                
                if (inceAmount >= curElem.max) {
                    inceAmount = curElem.max
                }
                return {
                    ...curElem,
                    amount : inceAmount,
                };
            } else {
                return curElem;
            }
                
        })

        return {
            ...state,
            cart : increaseProduct,
        }        

        case 'REMOVE_FROM_CART' : 
            
            let updatedCart = state.cart.filter((curElem) =>  curElem.id !== action.payload)
            return {
                    ...state,
                    cart: updatedCart ,
            }

        case 'CLEAR_CART' :
            
        return{
            ...state,
            cart:[],
        }

            case 'CART_TOTAL_PRICE_ITMES' :
                let {total_price,total_item} = state.cart.reduce((accum,curElem)=>{
                    let { price,amount } = curElem;
                    accum.total_item += amount;
                    accum.total_price += price*amount;
                    
                    return accum
                },
                {
                    total_price : 0,   
                    total_item : 0,   
                    
                })
                
                return {
                    ...state,
                    total_price,
                    total_item,
                }
                
                default:
                    return state;     
            }
            
        }
        export default cartReducer;
        
        // case 'CART_TOTAL_ITEMS' :
        //     let cartitemsvalues = state.cart.reduce((accum , curElem)=> {
        //         let  {amount} = curElem;
        //         accum = accum + amount;
        //         return accum;
                
        //     },0)
            
        //     return {
        //             ...state,
        //             total_item : cartitemsvalues
        //         }
                
        //         case 'CART_TOTAL_PRICE' :
        //             let totalPrice =state.cart.reduce((accum,curElem)=> {
        //                 let { price,amount } = curElem;
                        
        //                 accum = accum + price*amount;
                        
        //                 return accum;
        //             },0)    
                    
        //     return {
        //         ...state,
        //         total_price: totalPrice,
        //     }