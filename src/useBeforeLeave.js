import React, { Fragment, useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
  useEffect(()=>{
    if(typeof onBefore !== "function"){
      return; 
    }
    const handler = (event) => {
      console.log(event);
      onBefore();
    }
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler)
  }, [])
}

const App = () =>{
  const onBefore = () => {
    console.log("don't leave");
  }
  useBeforeLeave(onBefore);
  
  return (
    <>
      <h1>hello</h1>
    </>
  ) 
}
