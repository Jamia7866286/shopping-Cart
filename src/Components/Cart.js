import React, { createContext, useReducer } from 'react';
import ContextCart from './MainCart';
import { products } from './Product_Data';
import './shopingCart.scss';
import {reducer} from './Reducer'

export const Context = createContext();

const initialState = {
      item: products,
      totalAmount: 0,
      totalItems: 0
};


const CartComponent = ()=> {

      const [state, dispatch] = useReducer(reducer, initialState);

      const removeItemFromCart = (id)=>{
            // return(
                  dispatch({
                        type: "Remove_item",
                        payload: id,
                  })
            // );
      }

      // Remove all cart items
      const ClearAllCartItems = ()=> {
            dispatch({type: "Clear_All_Cart_items"});
      }

      // Increament items count
      const inCreamentItems = (id)=> {
            dispatch({
                  type: "increament_item",
                  payload: id,
            });
      }


      // DecreamentItems items count
      const deCreamentItems = (id)=> {
            dispatch({
                  type: "decreament_item",
                  payload: id,
            });
      }

      return (
            <>
                  <Context.Provider value={{...state, removeItemFromCart, ClearAllCartItems, inCreamentItems, deCreamentItems}}>
                        <ContextCart />
                  </Context.Provider>
            </>
      )
}

export default CartComponent
