// import { useState } from 'react'
import { useReducer, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import Layout from './DAY36/Layout'
// import UserCard from './DAY36/UserCard'
// import Button from './DAY36/Button'
// import Usestate from './DAY37/Usestate'
import './App.css'

function reducer(state, action) {
  switch (action.type) {

    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
}

const savedCount = localStorage.getItem("count");

const initialState = {
  count: savedCount ? JSON.parse(savedCount) : 0,
};

function App() {

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };
  useEffect(() => {
    localStorage.setItem(
      "count",
      JSON.stringify(state.count)
    );
  }, [state.count]);

  return (
    <div>

      <h1>{state.count}</h1>

      <button onClick={() =>
        dispatch({ type: "INCREMENT" })
      }>
        +
      </button>

      <button onClick={() =>
        dispatch({ type: "DECREMENT" })
      }>
        -
      </button>

      <button onClick={() =>
        dispatch({ type: "RESET" })
      }>
        Reset
      </button>

      <br /><br />

      <input
        ref={inputRef}
        placeholder="Enter text"
      />

      <button onClick={handleFocus}>
        Focus
      </button>

    </div>
  );
}

// // function App() {
// //   const [count, setCount] = useState(0)

// //   function btnClick(){
// //     alert("The Button is Clicked");
// //   }

//   return (
//     <>
//     {/* <Usestate/> */}
//     {/* <Layout>
//     <h1>Welcome to this Page</h1>

//     <UserCard name = "Ramya" age = {22} />
//     <UserCard name = "Gayathri" age = {17}/>

//     <Button label ="Click Here" style = {{display:"flex" , alignItems:"center"}} onClick = {btnClick}/>
//     </Layout> */}
//     </>
//   );
// };

export default App
