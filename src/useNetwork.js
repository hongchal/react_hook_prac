import React, { Fragment, useEffect ,useState} from 'react';

const useNetwork = (handler) => { 
  // const [status, setStatus] = useState(navigator.onLine);

  const networkHandler = () => {
    if(typeof handler === "function" ){
      handler(navigator.onLine);
    }
    // setStatus(navigator.onLine);
  };

  useEffect(()=>{
    window.addEventListener("online", networkHandler);
    window.addEventListener("offline", networkHandler);

    return () => {
      window.removeEventListener("online", networkHandler);
      window.removeEventListener("offline", networkHandler);
    }
    
  }, [])

  // return status;
}

const App = () =>{
  const handler = (online) => {
    console.log(online?"we are online" : "we are offline"); 
  }
  useNetwork(handler);
  // console.log(isOnLine);
  return (
    <>
      <h1 >hello</h1>
      <p >have a nice day :)</p>
    </>
  ) 
}