import {Layout} from "antd";
import React from "react";
import antdStyle from "../../App.css";
import styles from "./HomePageTeacher.module.css";
import {Sider, Header, Footer, Content, Watermark} from "../../components";
import { useLocation} from "react-router-dom";


export const HomePageTeacher = () => {
  const location = useLocation();
  const title = location.pathname.substring(location.pathname.lastIndexOf("/")+1, location.pathname.length)
  if (title)
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


