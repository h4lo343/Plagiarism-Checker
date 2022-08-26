import React, { useEffect } from "react";

export const Result = () => {
  useEffect(()=>{
    PubSub.publish("title","Result")
  },[])
  return (
    <>
      result content
    </>
  )
}