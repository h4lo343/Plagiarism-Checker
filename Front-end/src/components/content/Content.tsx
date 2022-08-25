import React from "react";
import {Layout} from "antd";
import antdStyle from "../../App.css";
import styles from "./Content.module.css"
import {Breadcrumb} from "../breadcrumb";

const {Content: PageContent} = Layout;

export const Content = () => {
    return (
        <PageContent className={styles.content}>
            <Breadcrumb/>
            <div
                className={antdStyle["site-layout-background"]}
                style={{
                    padding: 24,
                    minHeight: 360,
                }}
            >
                Bill is a cat.
            </div>
        </PageContent>
    );
};