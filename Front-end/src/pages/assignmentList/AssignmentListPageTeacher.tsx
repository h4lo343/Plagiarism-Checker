import React, { useEffect } from "react";
import { AssignmentListStudent } from "../../components";
import styles from "./AssignmentListPage.module.css";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { getAssignmentList } from "../../redux/assignmentList/slice";
import { Spin } from "antd";

export const AssignmentListPageTeacher = () => {

    useEffect(() => {
        PubSub.publish("title", `Assignment`);
    }, []);

    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    const loading = useReduxSelector((s) => s.assignmentList.loading);
    const error = useReduxSelector((s) => s.assignmentList.error);
    const assignmentList = useReduxSelector((s) => s.assignmentList.assignmentList);

    const dispatch = useReduxDispatch();
    const subjectCode = "COMP30001";
    useEffect(() => {
        if (jwtToken) {
            dispatch(getAssignmentList({jwtToken, subjectCode}));
        }
    }, [dispatch, jwtToken]);


    if (loading) {
        return (
            <Spin
                size="large"
                style={{
                    marginTop: 200,
                    marginBottom: 200,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%"
                }}
            />
        );
    }

    if (error) {
        return <div>error：{error}</div>;
    }


    return (
        <div className={styles["assign-container"]}>
            <div className={styles["teacherAssignTable-container"]}>
                <AssignmentListStudent loading={loading} assignmentList={assignmentList} />
            </div>
        </div>
    );
};