import React,{ useState} from "react";

const App = () => {
  const [name, setName] = useState("");
  const[list,setlist] = useState([]);

  console.log(list)
  
  const handleChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const handleAdd = (event) => {
    event.preventDefault();
    setlist([...list, name]);
    setName("")
  };
  return (
  <form className="form" onSubmit={handleAdd}>
    <label><b>Name:</b></label>
    <input placeholder="Type your name here" value={name} onChange={handleChange} />
    <button>Enter</button>
    <label><b>College Name:</b></label>
    <input placeholder="Type your college name here" value={name} onChange={handleChange} />
    <button>Enter</button>
  </form>
  );
  
};

export default App;
