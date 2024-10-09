import { useState } from "react";
// import "../image.jpg";
import "./signin.css";
import Images from "../Images/image.jpg";
import photo from "../Components/photo.jpg";
// import SignUp from "./signup";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Retrieve stored user credentials from localStorage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser); // Parse the stored user data
      // Check if email and password match the stored data
      if (email === user.email && password === user.password) {
        setMessage("Sign in successful!");
      } else {
        setMessage("Invalid email or password");
      }
    } else {
      setMessage("No user found. Please sign up first.");
    }
  };

  return (
    <div className="option">
      <div id="header">
        <h1 id="head">Kindly Log In</h1>
        <img className="image" src={Images} alt="" />
      </div>

      <button id="but">
        <img src={photo} alt="" />
        Sign in with Google
      </button>
      <br />

      {/* Form for Sign-in */}
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
          <label>Password</label>
          <br />
          <input
            id="word"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        {/* Submit button is now inside the form */}
        <button id="type" type="submit">
          Sign in
        </button>
      </form>

      {/* Display the message */}
      {message && <p>{message}</p>}

      <p id="have">
        Do not have an account?{" "}
        <Link to="/signup" rel="">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
