import React, { useEffect } from "react";
import { TeacherSubjectList } from "../../components";
import { mockSubject as SubjectList } from "./mock";
import { SubjectAdder } from "../../components/subjectAdder";
import { useDispatch } from "react-redux";
import { ReduxDispatch, RootState } from "../../redux/store"
import { getSubjectList } from "../../redux/subjectList/slice";
import { useSelector, TypedUseSelectorHook } from "react-redux";

export const TeacherSubjectPage: React.FC = () => {

  const selector: TypedUseSelectorHook<RootState> = useSelector
  const dispatch = useDispatch<ReduxDispatch>();
  const jwtToken = selector((state) => state.authentication.jwtToken)
  const subjectList = selector((state) => state.subjectList.SubjectList)

  useEffect(() => {
    PubSub.publish("title", "Subject")
    if (jwtToken) {
      dispatch(getSubjectList(jwtToken))
      
    }

  }, []);

  const TrimmedList = SubjectList.map((item) => {
    return {
      subjectId: item.subjectId,
      subjectName: item.subjectName,
      professor: item.professor.map((item, index, list) => {
        if (index != list.length - 1) { return item + ", " }
        else return item
      }),
      key: item.key
    }
  })

  return (
    <div>
      <TeacherSubjectList loading={false} SubjectList={TrimmedList} />
      <SubjectAdder />
    </div>
  )
}