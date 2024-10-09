import { useState } from "react";
import './App.css';

function App() {
  const [age, setAge] = useState(0);

  function btnClicked() {
    setAge(age+1);
  }
  // function btnClickedMinus() {
  //   setAge(age-1);
  // }
  function btnClickedMinus() {
    setAge((age) => (age > 0 ? age - 1 : 0));
  }
  
  const btnReset = () => {
    setAge(0)
  }

  return (
    <div>
      <p >{age}</p>
      <button onClick={btnClicked} className>Addition</button>
      <button onClick={btnReset}>Reset</button>
      <button onClick={btnClickedMinus}>Subtraction</button>
    </div>
  )
}

export default App;
