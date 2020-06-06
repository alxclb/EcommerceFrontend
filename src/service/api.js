import axios from 'axios';

export default axios.create({
  baseURL: "http://localhost:5000/api"
});

//Set initial localStorage
if (JSON.parse(window.localStorage.getItem('login')) == null) {
  localStorage.setItem(
    "login",
    JSON.stringify({
      login: false,
      token: "",
    })
  );
}

//Check if User is logged
const isLogged = () => {
  try {
    let logged = JSON.parse(window.localStorage.getItem('login')).login
    return logged;
  } catch (error) {
    console.log(error)
  }
};

//Set header 
const headers = {
  headers: {
    'Authorization': JSON.parse(window.localStorage.getItem('login')).token
  }
}
export {
  isLogged,
  headers
}