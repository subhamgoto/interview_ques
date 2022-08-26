import Directory from "./Directory";
import data from "./data.json";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [match, setMatch] = useState("");
  const onMatch = (path) => {
    setMatch(path);
  };
  const onSearch = (e) => {
    setMatch("");
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <input type="text" value={search} onChange={onSearch} />
      <p>Matched file: {match}</p>
      <Directory data={data} search={search} onMatch={onMatch} />
    </div>
  );
}
