import React from "react"
import antdStyle from "../../App.css";
import {Divider, Layout, Typography} from "antd";
import styles from "./Header.module.css";

const {Header: PageHeader} = Layout;

interface Propstype {
  headerName: string
}

export const Header:React.FC<Propstype> = ({headerName}) => {
    return (
        <div className={styles['header']}>
          <Divider orientation="center">
            <Typography.Title  level={2}>{headerName} page</Typography.Title>
          </Divider>
        </div>
         
    );
};
