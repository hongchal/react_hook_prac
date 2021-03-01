import React, { Fragment, useEffect ,useState, useRef} from 'react';

const useFullScreen = () => {
  const element = useRef();
  const triggerFullScreen = () => { 
    if(element.current){
      element.current.requestFullscreen();
    } 
  }
  const exitFull = () => {
    document.exitFullscreen();
  }
  return {element, triggerFullScreen, exitFull};
}

const App = () =>{
  const {element, triggerFullScreen, exitFull} = useFullScreen();
  return (
    <>
      <div className="App" style={ {height: "1000vh"}}>
        <div ref={element}> 
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          style={{width : "150px", height : "150px"}}></img>
          <button onClick={exitFull}>exitFullScreen</button>
        </div>
        <button onClick={triggerFullScreen}>FullScreen</button>
      </div>
    </>
  ) 
}
 