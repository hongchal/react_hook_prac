import React, { Fragment, useEffect , useRef} from 'react';

const useFadeIn = (fadeInTime = 3, delay = 0) => {
  const element = useRef();
  // console.log(element);
  useEffect(()=>{
    if(typeof fadeInTime !== "number" || typeof delay !=="number"){
      return;
    }

    if(element.current){
      const {current} = element;
      current.style.transition = `opacity ${fadeInTime}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [fadeInTime,delay])
  return {ref : element, style : {opacity : 0}};
}

const App = () =>{
  const targetH1 = useFadeIn(4); 
  const targetP = useFadeIn(4, 2);
  return (
    <>
      <h1 {...targetH1}>hello</h1>
      <p {...targetP}>have a nice day :)</p>
    </>
  ) 
}
