import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const TeacherResultDetailPage: React.FC = () => {
  const { resID } = useParams();

  useEffect(() => {
    PubSub.publish("title", resID+ " Result")
  }, []);

  return (
    <div>
      {resID}
    </div>
  );
}
