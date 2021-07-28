import React, { useContext } from "react";
import { Context } from "./Cart";

const Items = ({description, id, img, price, quantity, title}) => {

      // console.log(useContext(Context));
      const {removeItemFromCart, inCreamentItems, deCreamentItems} = useContext(Context);
      // console.log({removeItemFromCart});

  return (
    <>
        <div className="items-info" id={id}>
            <div className="product-img">
                  <img src={img} alt="product-item" />
            </div>
            <div className="title">
                  <h2>{title}</h2>
                  <p>{description}</p>
            </div>
            <div className="add-minus-quantity">
                  <svg onClick={()=>{deCreamentItems(id)}} className="fas fa-minus minus" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>
                  <input type="text" placeholder={quantity} />
                  <svg onClick={()=>{inCreamentItems(id)}} className="fas fa-plus add" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"/></g></g></svg>
            </div>
            <div className="price">
                  <h3>{price}</h3>
            </div>
            <div className="remove-item">
                  <svg onClick={()=>{
                        removeItemFromCart(id);
                  }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#c01d1d"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
            </div>
      </div>

      <hr />
    </>
  );
};

export default Items;