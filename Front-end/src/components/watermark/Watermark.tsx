import React from "react";
import watermark from "../../assets/images/watermark.png"
import styles from "./Watermark.module.css"

export const Watermark = () => {

  return (
    <img  src={watermark} alt=""  className={styles["watermark"]}/>
  )
}