//  1. Render a list of products using `.map()` with stable `key` props.
import { useState } from "react";

function Map(){
    const [array,setArray] = useState(['Pencil','Pen','Scale','Marker']);
    const[array1,setArray1] = useState("");
     
    function addElement(){
        setArray([...array,array1]);
        setArray1('');   
    }
    
    function deleteElement(indexValue){
        const updatedArray = array.filter((item,index) => {
            return index !== indexValue
        })
        setArray(updatedArray)
    }

return(
    <>
        <input type = "text" value={array1} onChange = {(e) => setArray1(e.target.value)}/>
        <button onClick={addElement}>Click here to Add Elements</button>
        <ul>{array.map((item,index) => 
        <li key = {index}>{item} <button onClick={() => deleteElement(index)}>Click to delete</button> </li>

    )}
    </ul>
     {array.length === 0 && <h2>No Products Available</h2>}
    </>
)
}
export default Map;
