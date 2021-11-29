import React from "react";
import Header from "../components/header";
import Body from "../components/body";
import styles from "../styles/grid.module.css";

const Container = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.main} ${styles.center}`}>
        <div className={`${styles.ledeart} ${styles.content}`}>lede art</div>
        <Header />
        <Body />
        <div className={`${styles.footer} ${styles.content}`}>
          item blah blah
        </div>
      </div>
    </div>
  );
};

export default Container;
