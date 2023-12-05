import React, { useState } from "react";
import styles from "./header.module.css";
import Login from "../Login/Login";

const Header = () => {
  const [login, setLogin] = useState<boolean>(false);

  const showLogin = () => {
    setLogin(true);
  };

  const closeConnect = () => {
    setLogin(false);
  };
  return (
    <div className={styles.wrapper}>
      <h1>Type17</h1>
      <button onClick={showLogin}>Login</button>
      {login && <Login input="example" closeConnect={closeConnect} />}
    </div>
  );
};

export default Header;
