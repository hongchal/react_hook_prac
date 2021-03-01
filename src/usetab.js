import React, { Fragment, useState } from 'react';

// function component with useState 
const contents = [
  {
    key : 0,
    tab : "Section1",
    content: "I'm the content of section1"
  },
  { 
    key : 1,
    tab : "Section2",
    content: "I'm the content of section2"
  }
];


const useTab = (initialValue, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialValue);
  if(!allTabs || !Array.isArray(allTabs)){
    console.error("wrong arg in useTab ,(allTabs) need to be exist and array");
  }
  return (
    {
      currentItem : allTabs[currentIndex],
      setItem : setCurrentIndex
    }
  );
}; 

const App = () =>{
  const {currentItem, setItem} = useTab(0, contents); 
  return(
    <>
      <div>
        {contents.map(
          (section, index) => <button key={section.key} onClick={(event) => {setItem(index); console.log(event.target)}}>{section.tab}</button>
        )}
      </div>
      <div>
        {/* {console.log(tab)} */}
        {currentItem.content}
      </div>
    </>
  )

}
