export let cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      state = [...state, action.data];
      return state;
    case "UPDATE_CART":
      state[action.index] = {
        ...state[action.index],
        qty: action.quantity, 
      };
      return state;
    case "REMOVE_PRODUCT":
      if (state.length > 0) {
        state = state.filter((_, index) => index !== action.index);
      }
      return state;
    default:
      throw new Error();
  }
};
