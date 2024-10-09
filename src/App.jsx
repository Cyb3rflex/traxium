// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/signup";
import Signin from "./Components/Signin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
