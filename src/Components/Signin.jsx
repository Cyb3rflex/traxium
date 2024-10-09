import { useState } from "react";
// import image from '../image.jpg'
import "./signin.css";
// import photo from "../photo.jpg";
// import SignUp from "./signup";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password123") {
      setMessage("sign in successful!");
    } else {
      setMessage("Invalid email or password");
    }
  };
  return (
    <div className="option">
      <div id="header">
        <h1 id="head">Sign in to KWARA RIDE</h1>
        {/* <img className="image" src={image} alt="" /> */}
      </div>
      <button id="but">
        {/* <img src={photo} alt="" /> */}
        sign in with Google
      </button>{" "}
      <br />
      <form onSubmit={handleSignIn}>
        <div>
          <label> Username or Email</label>
          <br />
          <input
            id="value"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Password</label> <br />
          <input
            id="word"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
      </form>
      {message && <p>{message}</p>}
      <button id="type" type="submit">
        sign in
      </button>
      <p id="have">
        Do not have an account?
        <Link to="/signup" rel="">
          sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
