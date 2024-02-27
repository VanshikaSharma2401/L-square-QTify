import React from "react";
import styles from "../../src/styles.module.css"
import headphone from "../assets/vibrating-headphone.png"
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.textContainer}>
            <p>100 Thousand Songs, ad-free</p>
            <p>Over thousands podcast episodes</p>
        </div>
        <img src={headphone} alt="search icon"/>
    </div>
  );
};

export default Hero;
