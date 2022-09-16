import React, { useEffect } from "react";
import { TeacherSubjectList } from "../../components";
import { mockSubject as SubjectList } from "./mock";
import { SubjectAdder } from "../../components/subjectAdder";

export const TeacherSubjectPage : React.FC = () => {

  useEffect(() => {
    PubSub.publish("title", "Subject")
  }, []);
 
 const TrimmedList = SubjectList.map((item) => {
  return {
    subjectId: item.subjectId,
    subjectName: item.subjectName,
    professor: item.professor.map((item, index, list) => {
      if (index != list.length-1) {return item+", "}
      else return item
    }),
    key: item.key
  }
 })

  return (
    <div>
      <TeacherSubjectList loading={false} SubjectList={TrimmedList}/>
      <SubjectAdder/>
    </div>
  )
}