import React from "react";
import styles from "./container.module.css";

function container({ children, flex, flexcol }) {
  return (
    <div
      className={
        flex
          ? styles.flexContainer
          : flexcol
          ? styles.flexColumn
          : styles.container
      }
    >
      {children}
    </div>
  );
}

export default container;
