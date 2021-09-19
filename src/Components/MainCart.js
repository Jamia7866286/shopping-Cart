import React, { useContext } from 'react'
import Scrollbars from 'react-custom-scrollbars-2';
import {Context} from './Cart'
import Items from './Item';


const ContextCart = () => {


      // console.log(useContext(Context));
      const {item, ClearAllCartItems, totalItems, totalAmount} = useContext(Context);
      // console.log({item, ClearAllCartItems});

      if(item.length === 0){
            return(
                  <>
                        <header>
                              <div className="continue-shopping">
                                    <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                                    <h3>Continue Shopping</h3>
                              </div>
                              <div className="cart-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                                    <p>0</p>
                              </div>
                        </header>
                        <section className="main-cart-section">
                              <h1>Shopping Cart</h1>
                              <p className="total-items">you have <span className="total-items-count">0</span> items in shopping cart</p>
                        </section>
                  </>
            );
      }

      return (
            <>
                  <header>
                        <div className="continue-shopping">
                              {/* <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg> */}
                              <h3>Continue Shopping</h3>
                        </div>
                        <div className="cart-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                              <p>{totalItems}</p>
                        </div>
                  </header>
                  <section className="main-cart-section">
                        <h1>Shopping Cart</h1>
                        <p className="total-items">you have <span className="total-items-count">{totalItems}</span> items in shopping cart</p>
                        <div className="cart-items">
                              <div className="cart-items-container">
                                    <Scrollbars>
                                          {
                                                item.map((currentItem)=>{
                                                      return (
                                                            <Items key={currentItem.id} {...currentItem} />
                                                      )
                                                })
                                          }
                                  </Scrollbars>
                              </div>
                        </div>

                        <div className="card-total">
                              <h3>Cart Total : <span>{totalAmount}rs</span></h3>
                              <button>Checkout</button>
                              <button className="clear-cart" onClick={()=>{
                                    ClearAllCartItems();
                              }}>Clear Cart</button>
                        </div>

                  </section>
            </>
      )
}

export default ContextCart
