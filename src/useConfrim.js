import React, { Fragment, useState, useEffect, useRef } from 'react';

// function component with useState 

const useConfirm = (message = "" , onConfirm, onCancel) => {
  // console.log(message);
  if(!onConfirm || typeof onConfirm !== "function"){
    return;
  }
  
  if(onCancel && typeof onCancel !== "function"){
    return;
  }

  const removeAction = () => {
    if(window.confirm(message)){
      onConfirm();
    }
    else{
      onCancel();
    }
  };

  return removeAction;
};

const App = () =>{
  const deleteworld = () => {
    console.log("deleted.."); 
  } 
  const abort = () => {
    console.log("aborted.."); 
  }

  const confirmDelete = useConfirm("are you sure?", deleteworld, abort);

  return (
    <>
      <button onClick={confirmDelete}>deleteworld</button>
    </>
  ) 
 
}