import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { register } from "../../service/service";

import styles from "./Register.module.scss";

const Register = ({ history }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [isOk, setCheck] = useState(false);

  useEffect(() => {
    setCheck(passConfirm === password);
  }, [passConfirm, password]);
  console.log(isOk);

  function handleSubmit() {
    console.log("Registracija");
    // if(!isOk)
    //     return
    register({
      name: user,
      email,
      password,
    }).then((data) => {
      console.log(data);
      if (data) {
        history.push("/login");
      } else console.log("False Registration");
    });
  }

  return (
    <div className={styles.container}>
      <div><h2>Join</h2></div>
      <form className={styles.form}>
        <input
          className="input"
          type="text"
          placeholder="Username "
          required
          onInput={(e) => {
            setUser(e.target.value);
          }}
        />
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
          type="password"
          placeholder="Confirm Password"
          required
          onInput={(e) => {
            setPassConfirm(e.target.value);
          }}
        />
        <input
          className="input"
          type="submit"
          value="Register"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        />
      </form>
      <Link to="/">
        <div className={styles.img_wrapper}>
          <img src={require("../../images/back.png")} alt="#" />
          <span>Back</span>
        </div>
      </Link>
    </div>
  );
};

export default withRouter(Register);
