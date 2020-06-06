export let loginReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      state = {
        login: true,
        token: action.data.token,
      };
      return state;
    case "LOGOUT":
      state = {
        login: false,
        token: action.data.token,
      };
      return state;
    default:
      throw new Error();
  }
};
