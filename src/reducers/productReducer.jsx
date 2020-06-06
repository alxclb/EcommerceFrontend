export let productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ALL_PRODUCTS":
        state = action.items
      return state;
    case "UPDATE_PRODUCT":
      state = action.data;
      console.log(state);
      return state;
    default:
      throw new Error();
  }
};
