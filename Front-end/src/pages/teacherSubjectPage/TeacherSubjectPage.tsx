import React, { useEffect } from "react";
import { TeacherSubjectList } from "../../components";
import { mockSubject as SubjectList } from "./mock";

export const TeacherSubjectPage : React.FC = () => {

  useEffect(() => {
    PubSub.publish("title", "Subject")
  }, []);
 

  return (
    <div>
      <TeacherSubjectList loading={false} SubjectList={SubjectList}/>
    </div>
  )
}