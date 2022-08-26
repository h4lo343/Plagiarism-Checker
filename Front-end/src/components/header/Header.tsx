import React, { useEffect, useState } from "react"
import antdStyle from "../../App.css";
import {Divider, Layout, Typography} from "antd";
import styles from "./Header.module.css";
import Pubsub from 'pubsub-js'

const {Header: PageHeader} = Layout;

interface Propstype {
    headerName: string
}

export const Header:React.FC<Propstype> = () => {
    const [title, setTitle] = useState("")
    Pubsub.subscribe("title",(_:any,data:string)=>{
        setTitle(data)
    })
    return (
        <div className={styles['header']}>
            <Divider orientation="center">
                <Typography.Title  level={2}>{title} page</Typography.Title>
            </Divider>
        </div>

    );
};
