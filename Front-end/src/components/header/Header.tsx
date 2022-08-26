import React, {useState} from "react"
import {Divider, Typography} from "antd";
import styles from "./Header.module.css";
import Pubsub from 'pubsub-js'


interface PropsType {
    headerName: string
}

export const Header: React.FC<PropsType> = () => {
    const [title, setTitle] = useState("")
    Pubsub.subscribe("title", (_: any, data: string) => {
        setTitle(data)
    })
    return (
        <div className={styles['header']}>
            <Divider orientation="center">
                <Typography.Title level={2}>{title} page</Typography.Title>
            </Divider>
        </div>

    );
};
