import { useState } from "react";

function Usestate() {
  const [name, setName] = useState("");
  const [bg, setBg] = useState("white");
  const [btn, setBtn] = useState("change Mode");

  function nameChange(e) {
    setName(e.target.value);
  }

  function changeMode() {
    if (bg === "white") {
      setBg("black");
      setBtn("Light Mode");
    } else {
      setBg("white");
      setBtn("Dark Mode");
    }
  }

  return (
    <div
      style={{
        backgroundColor: bg,
        height: "100vh",
        color: bg === "black" ? "white" : "black",
        padding:"20px",
      }}
    >
      <input type="text" onChange={nameChange} placeholder="Enter Text"></input>
      <button onClick={changeMode} style={{margin:"5px"}}>{btn}</button>
      <h1>{name}</h1>
    </div>
  );
}
export default Usestate;
