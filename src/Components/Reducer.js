export const reducer = (state, action)=>{

      if(action.type === 'Remove_item'){
            return(
                  {
                        ...state,
                        item: state.item.filter((curentItem)=>{
                              return curentItem.id !== action.payload;
                        })
                  }
            )
      }
      if(action.type === "Clear_All_Cart_items"){
            return (
                  {
                        ...state,
                        item: []
                  }
            )
      }

      if(action.type === "increament_item"){
            let updatedCart = state.item.map((currentElement)=>{
                  if (currentElement.id === action.payload){
                        // console.log({...currentElement});
                        return (
                              {
                                    ...currentElement,
                                    quantity: currentElement.quantity + 1
                              }
                        )
                  }
                  return currentElement;
            });
            return ({...state, item: updatedCart})
      }

      if(action.type === "decreament_item"){
            let updateCart = state.item.map((currentElement)=>{
                  if(currentElement.id === action.payload){
                        return (
                              {
                                    ...currentElement,
                                    quantity: currentElement.quantity - 1
                              }
                        )
                  }
                  return currentElement;
            },).filter((currentElement)=>{
                  return currentElement.quantity !== 0 
            });
            return ({...state, item: updateCart});
      }
      return state;
}