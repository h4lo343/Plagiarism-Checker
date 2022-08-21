import {Layout} from "antd";
import React from "react";
import antdStyle from "../../App.css";
import styles from "./HomePage.module.css";
import {Sider, Header, Footer, Content, Watermark} from "../../components";


export const HomePage = () => {
    return (
        <Layout className={styles.layout}>
            <Sider/>
            <Layout className={antdStyle["site-layout"]}>
                <Header/>
                    <Content/>
                    <Watermark left="48%" top='33%'/>
                <Footer/>
            </Layout>
        </Layout>
    );
};


