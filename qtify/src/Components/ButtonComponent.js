import React from "react";
import styles from "../../src/styles.module.css"
const Button = ({text}) => {
  return (
      <button className={styles.FeedbackBtn} type="text">
        {text}
      </button>
  );
};
export default Button;
