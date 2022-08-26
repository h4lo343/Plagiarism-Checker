import React from "react"
import {Divider, Typography} from "antd";
import styles from "./Header.module.css";

interface PropType {
  headerName: string
}

export const Header:React.FC<PropType> = ({headerName}) => {
    return (
        <div className={styles['header']}>
          <Divider orientation="center">
            <Typography.Title  level={2}>{headerName} page</Typography.Title>
          </Divider>
        </div>
    );
};
