import API, { headers } from './api';
const CREATE_PRODUCT = '/products/create';
const GET_ALL_PRODUCTS = '/products/all';





//Get ALl Products
export const getAllProducts = async () => {
  try {
    const response = await API.get(GET_ALL_PRODUCTS, headers);
    return response;
  } catch (error) {
    console.log(error)
  }
}

//Get Product
export const getProduct = async (id) => {
  try {
    const response = await API.get(`/product/${id}`, { id }, {
      headers: {
        'Authorization': JSON.parse(window.localStorage.getItem('login')).token
      }
    });
    return response;
  } catch (error) {
    console.log(error)
  }
}

//Add Product
export const addProduct = async (product) => {
  try {
    const response = await API.post(CREATE_PRODUCT, product, {
      headers: {
        'Authorization': JSON.parse(window.localStorage.getItem('login')).token,
        'content-type': 'multipart/form-data'
      }
    })
    return response
  } catch (error) {
    console.log(error)
  }
};

//Delete Product
export const deleteProduct = async (id, img_id) => {
  try {
    const response = await API.delete(`/product/${id}`, {
      headers: {
        'Authorization': JSON.parse(window.localStorage.getItem('login')).token,
        'img_id':img_id,
      }
    });
    return response;
  } catch (error) {
    console.log(error)
  }
}

//Update Product
export const updateProduct = async (product) => {
  try {
    const response = await API.put(`/product/${product.id}`, product, {
      headers: {
        'Authorization': JSON.parse(window.localStorage.getItem('login')).token,
        'content-type': 'multipart/form-data'
      }
    });
    return response;
  } catch (error) {
    console.log(error)
  }

}


//ADD IMAGE
// export const addImage = imageData => dispatch => {
//         API.post("/add", imageData)
//     .then(res =>
//       dispatch({
//         type: ADD_IMAGE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
//   history.push("/");
// };