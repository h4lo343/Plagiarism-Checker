import React, { useEffect } from "react";
import {AssignmentList, AssignmentAdder} from '../../components';
import styles from './Assignment.module.css'


const mockAssignments = [{
    subjectId: "SWEN90014",
    subjectName: "M.Eng Project",
    assignmentName: "SCORE Sprint 1",
    assignmentID:"1000",
    key:"1000"
},{
    subjectId: "SWEN90014",
    subjectName: "M.Eng Project",
    assignmentName: "SCORE Sprint 2",
    assignmentID:"1001",
    key:"1012301"
},
{
  subjectId: "SWEN90014",
  subjectName: "M.Eng Project",
  assignmentName: "SCORE Sprint 2",
  assignmentID:"1001",
  key:"103201"
},
{
  subjectId: "SWEN90014",
  subjectName: "M.Eng Project",
  assignmentName: "SCORE Sprint 2",
  assignmentID:"1001",
  key:"10301"
},
{
  subjectId: "SWEN90014",
  subjectName: "M.Eng Project",
  assignmentName: "SCORE Sprint 2",
  assignmentID:"1001",
  key:"14001"
},
{
  subjectId: "SWEN90014",
  subjectName: "M.Eng Project",
  assignmentName: "SCORE Sprint 2",
  assignmentID:"1001",
  key:"10015"
},
{
  subjectId: "SWEN90014",
  subjectName: "M.Eng Project",
  assignmentName: "SCORE Sprint 2",
  assignmentID:"1001",
  key:"10401"
},
{
  subjectId: "SWEN90014",
  subjectName: "M.Eng Project",
  assignmentName: "SCORE Sprint 2",
  assignmentID:"1001",
  key:"10031"
},
{
  subjectId: "SWEN90014",
  subjectName: "M.Eng Project",
  assignmentName: "SCORE Sprint 2",
  assignmentID:"1001",
  key:"10021"
},
{
  subjectId: "SWEN90014",
  subjectName: "M.Eng Project",
  assignmentName: "SCORE Sprint 2",
  assignmentID:"1001",
  key:"10101"
},
{
  subjectId: "SWEN90014",
  subjectName: "M.Eng Project",
  assignmentName: "SCORE Sprint 2",
  assignmentID:"1001",
  key:"100"
},

];

export const Assignment = () => {
  useEffect(()=>{
    PubSub.publish("title","Assignmenrt")
  },[])
  return (
    <div className={styles['assign-container']}>
      <div className={styles['teacherAssignTable-container']}>
          <AssignmentList loading={false} assignments={mockAssignments}/>
          <AssignmentAdder/>
      </div>
    </div>
  )
}