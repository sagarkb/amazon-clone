export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      //add to basket
      return { ...state, basket: [...state.basket, action.item] };
    case 'REMOVE_FROM_BASKET':
      //remove form basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
