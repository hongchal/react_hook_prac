import React, { Fragment, useEffect ,useState, useRef} from 'react';
import useAxios from "./useAxios";

const App = () =>{
  // const {loading, error, data} = useAxios({ url: "https://yts.am/api/v2/list_movies.json"})
  const { loading, data, error, refetch } = useAxios({
    url:
    "https://yts-proxy.now.sh/list_movies.json"
    });
  // console.log(`loading : ${loading}\n error : ${error}\n data : ${JSON.stringify(data)}\n`)
  return (
    <>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading..." }</h2>
      <button onClick={refetch}>refetch</button>
    </>
  ) 
}

// class component 
// class App extends React.Component{
//   state = {
//     num : 0
//   };

//   increment = () => {
//     this.setState(current => {
//       return {
//         num : current.num + 1
//       }
//     })
//   }

//   render(){
//     const { num } = this.state;
    
//     return <Fragment>
//     <div>{num}</div>
//     <button onClick={this.increment}>Increment</button>
//     </Fragment>
    
//   }
// }

// function component without hook 
// function App() {
//   let num = 0;
  
//   // function clickhandler(){
//   //   // console.log("clicked!");
//   //   num++;
//   //   console.log(num);
//   //   const number = document.querySelector(".num");
//   //   number.innerText = num;
//   // }

//   return (
//     <div className="App">      
//       <button onClick={ () => {
//         num++;
//         console.log(num);
//         const number = document.querySelector(".num");
//         number.innerText = num;
//       }} >click</button>
//       <h1 className="num">{num}</h1> 
//     </div>
//   );
// }

export default App;
