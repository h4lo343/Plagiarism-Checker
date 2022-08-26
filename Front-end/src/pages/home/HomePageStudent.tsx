import {Layout} from "antd";
import React, { useEffect } from "react";
import antdStyle from "../../App.css";
import styles from "./HomePage.module.css";
import {Sider, Header, Footer, Content, Watermark} from "../../components";
import {useLocation} from "react-router-dom";


export const HomePageStudent = () => {
    
    const location = useLocation();
    const title = location.pathname.substring(location.pathname.lastIndexOf("/") + 1, location.pathname.length)
    return (
        <Layout className={styles.layout}>
            <Sider/>
            <Layout className={antdStyle["site-layout"]}>
                <Header headerName={title}/>
                <Content/>
                <Watermark left="48%" top='33%'/>
                <Footer/>
            </Layout>
        </Layout>
    );
};


