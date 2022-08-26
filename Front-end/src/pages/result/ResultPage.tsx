import React, { useEffect } from "react";

export const ResultPage = () => {
  useEffect(()=>{
    PubSub.publish("title", "Result")
  })
    return (
        <>
            result content
        </>
    )
};