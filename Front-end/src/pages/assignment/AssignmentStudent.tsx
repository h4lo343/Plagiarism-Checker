import React from "react";
import {AssignmentListStudent} from '../../components';
import styles from './Assignment.module.css'

const mockAssignments = [{
    semester: "S2 2023",
    subjectId: "SWEN90014",
    subjectName: "M.Eng Project",
    assignmentName: "SCORE Sprint 1",
    createDate: new Date(2022, 7, 1).toDateString(),
    dueDate: new Date(2022, 7, 22).toDateString()
},{
    semester: "S2 2023",
    subjectId: "SWEN90014",
    subjectName: "M.Eng Project",
    assignmentName: "SCORE Sprint 2",
    createDate: new Date(2022, 7, 29).toDateString(),
    dueDate: new Date(2022, 8, 20).toDateString()
}];

export const AssignmentStudent = () => {
    return (
        <div className={styles['assign-container']}>
            <div className={styles['teacherAssignTable-container']}>
                <AssignmentListStudent loading={false} assignments={mockAssignments}/>
            </div>
        </div>
    )
}