import API from './api'
const LOGIN = "/user/login"
const REGISTER = "/user/register"

//LOGIN
export const login = async (user) => {
  try {
    const token = await API.post(LOGIN, user).then(token => token.data);
    return {
      token
    };
  } catch (error) {
    console.log(error)
  }
};

//REGISTER
export const register = async (user) => {
  try {
    const response = await API.post(REGISTER, user);
    return response
  } catch (error) {
    console.log(error)
  }
}

