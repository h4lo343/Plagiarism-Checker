import React from "react"
import antdStyle from "../../App.css";
import {Layout} from "antd";

const {Header: PageHeader} = Layout;

export const Header = () => {
    return (
        <PageHeader
            className={antdStyle["site-layout-background"]}
            style={{
                padding: 0,
            }}
        />
    );
};
