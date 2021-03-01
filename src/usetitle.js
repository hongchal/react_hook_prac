import React, { Fragment, useState, useEffect } from 'react';

// function component with useState 

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () =>{
    const pagetitle = document.querySelector("title");
    pagetitle.innerText = title;
  } 
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () =>{
  const titleUpdater = useTitle("Loding...");
  setTimeout(() => titleUpdater("Home"),2000)
  return(
    <>
     <div>
       hi
     </div>
    </>
  )

}