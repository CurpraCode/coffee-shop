export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

 export const getTotalItems = (cart) =>
  cart?.reduce((total, item) => item.quantity + total, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET": {
      const itemIndex = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      let newBasket = [...state.basket];
      if (itemIndex >= 0) {
        newBasket[itemIndex].quantity += 1;
      } else {
        newBasket = [...state.basket, action.item];
      }
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
      };
    }

    case "REMOVE_FROM_BASKET": {
      const itemIndex = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (itemIndex >= 0) {
        if (newBasket[itemIndex].quantity > 1) {
          newBasket[itemIndex].quantity -= 1;
        } else {
          newBasket.splice(itemIndex, 1);
        }
      } else {
        console.warn("Item Not Found");
      }
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
      };
    }

    default:
      return state;
  }
};

export default reducer;
