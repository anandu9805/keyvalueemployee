//import logo from './logo.svg';
import "./App.css";
import InputField from "./components/inputField";
import Button from "./components/button";
import { useEffect, useState } from "react";

function App() {
  const [UserName, setUserName] = useState("");
  const [displayName, setDisplayName] = useState("");
  useEffect(() => {
    if (UserName) {
      setDisplayName(UserName);
    }
  }, [UserName]);
  const onChange = (value) => {
    setUserName(value);
  };
  return (
    <div className="App">
      <InputField label="User Name" onChange={onChange} />
      {displayName && <h1>Hello {displayName}</h1>}
      {/* <InputField label='UserName'/>
      <InputField label='Password'/>
      <Button label='login' handleClick={()=>{}}/>
      <div>
        <h2>Home</h2>
        <button onClick={onClick}>open</button>
      </div> */}
    </div>
  );
}

export default App;
