import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import Layout from './DAY36/Layout'
// import UserCard from './DAY36/UserCard'
// import Button from './DAY36/Button'
import Usestate from './DAY37/Usestate'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  function btnClick(){
    alert("The Button is Clicked");
  }

  return (
    <>
    <Usestate/>
    {/* <Layout>
    <h1>Welcome to this Page</h1>

    <UserCard name = "Ramya" age = {22} />
    <UserCard name = "Gayathri" age = {17}/>

    <Button label ="Click Here" style = {{display:"flex" , alignItems:"center"}} onClick = {btnClick}/>
    </Layout> */}
    </>
  );
};

export default App
