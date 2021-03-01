import React, { Fragment, useEffect ,useState, useRef} from 'react';

const useNotification = (title, option) => {
  if(!("Notification" in window)){
    return;
  }

  const fireNotifi = () => {
    if(Notification.permission !== "granted"){
      Notification.requestPermission().then(permission =>{
        if(permission === "granted"){
          new Notification(title, option);
        }
        else{
          return;
        }
      })
    }else{
      new Notification(title, option); 
    }
  }

  return fireNotifi;
}


const App = () =>{
  const trigerNotfi = useNotification("hey", {body : "run away!!"});
  return (
    <>
      <button onClick={trigerNotfi }>asd</button>
    </>
  ) 
}