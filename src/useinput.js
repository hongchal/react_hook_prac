import React, { Fragment, useState } from 'react';

// function component with useState 

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  let willupdate = true;
  const onChange = event =>{ 
    const {target : {value}} = event;
    // console.log(event.target);  
    if(typeof validator === "function"){
      willupdate = validator(value);  
    }
    if(willupdate){
      setValue(value);
    }
  }
  return {value, onChange};
}

const App = () =>{
  const maxLen = (value) =>{
    return value.length <= 10;  
  }
  const [num, changenum] = useState(0); 
  const increment = () => changenum(num + 1);
  const decrement = () => changenum(num - 1);
  const inputName = useInput("Mr.", maxLen);

  return(
    <>
      <div>
        {num}
      </div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button><br/>
      {/* <input placeholder="name" value={inputName.name} onChange={inputName.setname}></input> */}
      {/* <input placeholder="name" value={inputName.name} onChange={inputName.onChange}></input> */}
      <input placeholder="name" {...inputName}></input>

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

// export default App;
