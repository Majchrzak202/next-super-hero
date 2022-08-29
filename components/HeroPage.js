import React from "react";
import styles from "../styles/Home.module.css";
const HeroPage = () => {
  return (
    <div className={styles.main}>
      <h1>Hulk</h1>
      <img 
        style={{ width: "200px", height: "200px" }}
        alt="hulk"
        src="https://bleedingcool.com/wp-content/uploads/2019/08/marvels-avengers-square-enix-4-900x900.jpg"
      />
      <p>Green motherfucker</p>
    </div>
  );
};

export default HeroPage;
