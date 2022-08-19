import React from "react"
import {Breadcrumb as PageBreadcrumb} from "antd";
import styles from "./Breadcrumb.module.css";

export const Breadcrumb = () => {
    return (
        <PageBreadcrumb className={styles.breadcrumb}>
            <PageBreadcrumb.Item>User</PageBreadcrumb.Item>
            <PageBreadcrumb.Item>Bill</PageBreadcrumb.Item>
        </PageBreadcrumb>
    );
};