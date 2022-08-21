import React, {useState} from "react";
import antdStyle from "../../App.css";
import {Menu, Layout} from "antd";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";

const {Sider: PageSider} = Layout;

const getItem = (label: string, key: string, icon?: JSX.Element, children?: any) => {
    return {
        label,
        key,
        icon,
        children
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />,
        [getItem('Team 1', '6'),
            getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />)
];

export const Sider = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <PageSider
            collapsible collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
        >
            <div className={antdStyle["logo"]} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </PageSider>
    );
};