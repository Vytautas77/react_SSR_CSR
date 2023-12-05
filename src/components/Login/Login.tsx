import React from "react";
import styles from "./login.module.css";
type LoginType = {
  input: string;
  closeConnect: () => void;
};

const Login: React.FC<LoginType> = ({ closeConnect }) => {
  return (
    <div className={styles.wrapper}>
      <input />
      <input />
      <button onClick={closeConnect}>CONNECT</button>
    </div>
  );
};

export default Login;
