import React, { useEffect, useRef, useState } from "react";
import { Menu, Layout } from "antd";
import styles from "./Sider.module.css"
import { BarChartOutlined, FileOutlined, ExperimentOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { StringDecoder } from "string_decoder";

const { Sider: PageSider } = Layout;

const getItem = (label: string, key: string, icon?: JSX.Element) => {
  return {
    label,
    key,
    icon,
  };
}

const items = [
  getItem('Subject', 'subject', <ExperimentOutlined />),
  getItem('Total Assignment', 'assignment-list', <FileOutlined />),
  getItem('Result', 'result', <BarChartOutlined />),
];

export const Sider = () => {

  const [selectedKeys, setSelectedKeys] = useState([''])
  const navigate = useNavigate();
  const clickMenu = ({ key }: any) => {
    navigate(`${key}`)
  }
  const location = useLocation();
  const path = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
  useEffect(() => {
    setSelectedKeys([path])
  }, [path])
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
        selectedKeys={selectedKeys}
        onClick={clickMenu}
      />
    </PageSider>
  );
};