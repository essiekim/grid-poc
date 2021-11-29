import React from "react";
import Link from "next/link";
import styles from "../styles/grid.module.css";

const Header = () => {
  return (
    <div className={`${styles.header} ${styles.content}`}>
      <ul>
        <li>
          <Link href="/">Standard</Link>
        </li>
        <li>
          <Link href="/center">Centered</Link>
        </li>
        <li>
          <Link href="/live">LUF</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
