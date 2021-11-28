import React from "react";
import Body from "../components/body";
import styles from "../styles/grid.module.css";

const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={`${styles.header} ${styles.content}`}>
          hello i am the header and i am lame. boring header stuff, blah blah
          blah.
        </div>
        <Body/>
        <div className={`${styles.rail} ${styles.content}`}>item blah blah</div>
        <div className={`${styles.footer} ${styles.content}`}>
          item blah blah
        </div>
      </div>
    </div>
  );
};

export default Container;
