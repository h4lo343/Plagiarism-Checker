import React, { useEffect } from "react";
import { AssignmentListStudent, AssignmentListTeacher } from "../../components";
import styles from "./AssignmentListPage.module.css";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { getAssignmentList } from "../../redux/assignmentList/slice";
import { Spin } from "antd";
import { useLocation, useParams } from "react-router-dom";

export const AssignmentListPageTeacher = () => {

    const { subjectCode } = useParams();
    console.log(subjectCode)
    useEffect(() => {
        PubSub.publish("title", `Assignment`);
    }, []);

    const jwtToken = useReduxSelector((s) => s.authentication.jwtToken);
    const loading = useReduxSelector((s) => s.assignmentList.loading);
    const error = useReduxSelector((s) => s.assignmentList.error);
    const assignmentList = useReduxSelector((s) => s.assignmentList.assignmentList);

    const dispatch = useReduxDispatch();
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
                <AssignmentListTeacher loading={loading} assignmentList={assignmentList} />
            </div>
        </div>
    );
};