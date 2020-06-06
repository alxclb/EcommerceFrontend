import React, { useState, useContext, useEffect } from "react";
import styles from "./Admin.module.scss";
import { ProductContext } from "../context/productContext";
import {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../service/product";
import { v4 as uuidv4 } from "uuid";

const Admin = (props) => {
  const { products, dispatch } = useContext(ProductContext);

  useEffect(() => {
    getAllProducts().then((data) => {
      let items = data.data;
      dispatch({ type: "ADD_ALL_PRODUCTS", items });
    });
  }, [dispatch]);
  const [option, setOption] = useState();
  const [display, setDisplay] = useState("");
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");

  const openProductSetup = (product) => {
    product._id ? setDisplay("Update") : setDisplay("Create");
    setVisible(true);
    setId(product._id || uuidv4());
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImage(product.image);
    setBrand(product.brand);
    setCategory(product.category);
    setStock(product.stock);
  };
  const initProduct = JSON.stringify({
    id,
    name,
    price,
    description,
    image,
    brand,
    category,
    stock,
  });
  const product = {
    id,
    name,
    price,
    description,
    image,
    brand,
    category,
    stock,
  };

  //Open Create New Product Form
  const createBtn = () => {
    setOption(true);
    openProductSetup(initProduct);
  };

  //Add New Or Update Product
  const submitHandler = (e) => {
    e.preventDefault();
    //image and product upload
    let formData = new FormData();
    formData.append("image", image);
    formData.append("product", JSON.stringify(product));

    if (option) {
      addProduct(formData);
    } else {
      updateProduct(formData);
    }
  };
  //Delete Product
  const deleteHandler = (product) => {
    deleteProduct(product._id, product.image.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.product_header}>
        <h3>Products</h3>
        <button className={styles.button_primary} onClick={createBtn}>
          Create Product
        </button>
      </div>
      {visible && (
        <div className={styles.form}>
          <form onSubmit={submitHandler} encType="multipart/form-data">
            <ul className={styles.form_container}>
              <li>
                <h2>Create Product</h2>
              </li>
              <li>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  value={price}
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                ></input>
              </li>
              <li>
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={brand}
                  id="brand"
                  onChange={(e) => setBrand(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="stock">Stock</label>
                <input
                  type="text"
                  name="stock"
                  value={stock}
                  id="stock"
                  onChange={(e) => setStock(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="name">Category</label>
                <input
                  type="text"
                  name="category"
                  value={category}
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  value={description}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </li>
              <li>
                <button type="submit" className={styles.button_primary}>
                  {display}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openProductSetup(false)}
                  className={styles.button_secondary}
                >
                  Close
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}

      <div className={styles.product_list}>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <button
                    className={styles.button}
                    onClick={() => openProductSetup(product)}
                  >
                    Edit
                  </button>{" "}
                  <button
                    className={styles.button}
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Admin;
