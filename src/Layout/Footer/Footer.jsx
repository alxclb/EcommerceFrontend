import React from "react";

import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <hr />
      <div className={styles.container}>
        <div>
          <img
            alt="img"
            src="https://source.unsplash.com/user/erondu/600x400"
          />
          <p>1717 Harrison St, San Francisco, CA 94103, USA</p>
        </div>
        <div>
          <h4>MAIN MENU</h4>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/about">
            About
          </Link>
          <Link className={styles.link} to="/shop">
            Shop
          </Link>
          <Link className={styles.link} to="/help">
            Help
          </Link>
        </div>
        <div>
          <h4>COMPANY</h4>
          <Link className={styles.link} to="/company">
            The Company
          </Link>
          <Link className={styles.link} to="/careers">
            Careers
          </Link>
          <Link className={styles.link} to="/press">
            Press
          </Link>
        </div>
        <div>
          <h4>DISCOVER</h4>
          <Link className={styles.link} to="/team">
            The Team
          </Link>
          <Link className={styles.link} to="/history">
            Our History
          </Link>
          <Link className={styles.link} to="/brandmotto">
            Brand Motto
          </Link>
        </div>
        <div>
          <h4>FIND US ON</h4>
          <Link className={styles.link} to="/facebook">
            Facebook
          </Link>
          <Link className={styles.link} to="/twitter">
            Twitter
          </Link>
          <Link className={styles.link} to="/instagram">
            Instagram
          </Link>
        </div>
      </div>
      <hr />
      <p className={styles.company_name}>Your Company Name &copy; 2020</p>
    </>
  );
};
export default Footer;
