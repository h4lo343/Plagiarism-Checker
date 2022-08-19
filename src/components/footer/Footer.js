import React from "react"
import styles from "./Footer.module.css"
import {Layout} from "antd";

const {Footer: PageFooter} = Layout;

export const Footer = () => {
    return (
        <PageFooter className={styles.footer}>
            Ant Design ©2018 Created by Ant UED
        </PageFooter>
    )
};
