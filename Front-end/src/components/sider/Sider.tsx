import React, {useState} from "react";
import {Menu, Layout} from "antd";
import styles from "./Sider.module.css"
import {BarChartOutlined, FileOutlined, ExperimentOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const {Sider: PageSider} = Layout;

const getItem = (label: string, key: string, icon?: JSX.Element) => {
    return {
        label,
        key,
        icon,
    };
}

const items = [
    getItem('subject', 'subject', <ExperimentOutlined/>),
    getItem('assignment', 'assignment-list', <FileOutlined/>),
    getItem('result', 'result', <BarChartOutlined/>),
];

export const Sider = () => {
    const navigate = useNavigate();
    const clickMenu = ({key}: any) => {
        navigate(`${key}`)
    }
    const [collapsed, setCollapsed] = useState(false);
    return (
        <PageSider
            collapsible collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            className={styles["sider"]}
        >
            <Menu theme="dark"
                  defaultSelectedKeys={['1']}
                  mode="inline"
                  items={items}
                  className={styles['sider-menu']}
                  onClick={clickMenu}
            />
        </PageSider>
    );
};