import React from "react";
import style from "./Background.module.css";

function Background( {children} ) {
  return <div className={style.background}>
    {children}
  </div>;
}

export default Background;
