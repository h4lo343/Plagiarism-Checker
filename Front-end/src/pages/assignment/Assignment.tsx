import React from "react";
import {AssignmentList} from '../../components';
import styles from './Assignment.module.css'

const mockAssignments = [{
    subjectId: "SWEN90014",
    subjectName: "M.Eng Project",
    assignmentName: "SCORE Sprint 1"
},{
    subjectId: "SWEN90014",
    subjectName: "M.Eng Project",
    assignmentName: "SCORE Sprint 2"
}];

export const Assignment = () => {
  return (
    <div className={styles['assign-container']}>
      <div className={styles['teacherAssignTable-container']}>
          <AssignmentList loading={false} assignments={mockAssignments}/>
      </div>
    </div>
  )
}