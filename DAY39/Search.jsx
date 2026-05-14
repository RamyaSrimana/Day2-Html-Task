import { useState } from "react";

function Search() {
  const [array] = useState(["Pencil", "Pen", "Scale", "Marker"]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);


  const filtered = array.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <label>Search Items: </label>
      <input type="text"  value={search} onChange={(e) => setSearch(e.target.value)}/>
      <ul>
        {filtered.map((item, index) => (
          <li key={index} onClick={() => setSelected(index)} className={selected === index ? 'colour':'none'}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Search;