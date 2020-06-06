import React, { useState, useContext } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import { login } from "../../service/service";

import styles from "./Login.module.scss";
import { LoginContext } from "../../context/loginContext";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logText, setLogText] = useState({
    connected: false,
    error: "",
  });

  const { dispatch } = useContext(LoginContext);

  function handleSubmit() {
    login({ email, password }).then((data) => {
      if (data) {
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            token: data.token,
          })
        );
        dispatch({ type: "LOGIN", data });
        setLogText({ ...logText, error: "" });
      } else {
        setLogText({ ...logText, error: "Wrong email or password" });
        console.log("Log error, try again");
      }
    });
  }

  return (
    <>
      {!JSON.parse(window.localStorage.getItem("login")).login ? (
        <div className={styles.container}>
          <div>
            <h2>Sign in</h2>
          </div>
          <div>
            <h5>{logText.connected ? "" : logText.error}</h5>
          </div>
          <form className={styles.form}>
            <input
              className="input"
              type="email"
              placeholder="Email"
              required
              onInput={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              required
              onInput={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              className="input"
              type="submit"
              value="Sign in"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            />
            <Link to="/">
              <div className={styles.img_wrapper}>
                <img src={require("../../images/back.png")} alt="#" />
                <span>Back</span>
              </div>
            </Link>
          </form>
        </div>
      ) : (
        <Redirect to="/home" />
      )}
    </>
  );
};

export default withRouter(Login);
