import React, { Fragment, useState, useEffect, useRef } from 'react';

// function component with useState 

const useClick = (eventhandler) => {
  const ref = useRef();
  console.log(ref);
  useEffect(() =>{
    console.log(ref);
    const element = ref.current;
    console.log(element);
    if(element){
      element.addEventListener("click", eventhandler);
    }
    return () =>{
      if(element){
        element.removeEventListener("click", eventhandler);
      }
    };
  }, [eventhandler]);

  return ref;
};


// const useClick = (eventhandler) => {
//   const element = useRef();
//   useEffect(() =>{
//     // const element = ref.current;
//     console.log(element.current);
//     if(element.current){
//       element.current.addEventListener("click", eventhandler);
//     }
//     return () =>{
//       if(element.current){
//         element.current.removeEventListener("click", eventhandler);
//       }
//     };
//   }, [eventhandler]);

//   return element;
// };

const App = () =>{
  const sayhello = () =>{
    console.log("clicked!");
  }
  const hello = useClick(sayhello); 

  return (
    <>
      <h1 ref={hello}>hi</h1>
    </>
  ) 
 
}