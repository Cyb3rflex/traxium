import { useState } from "react";
import "./signin.css";
import Images from "../Images/image.jpg";
import photo from "../Components/photo.jpg";
// import SignUp from "./signup";
import { Link } from "react-router-dom";
<<<<<<< HEAD


=======
>>>>>>> a916f7dfa6c961e3d138a571c73e3d639d53048f

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook for redirection

  const handleSignIn = (e) => {
    e.preventDefault();
    // Retrieve stored user credentials from localStorage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser); // Parse the stored user data
      // Check if email and password match the stored data
      if (email === user.email && password === user.password) {
        setMessage("Sign in successful!");
        navigate("/aheadcr"); // Redirect to Aheadcr on success
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
        <img className="image" src={Images} alt="Sign In" />
      </div>

      <button id="but">
        <img src={photo} alt="Google Sign In" />
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
        {/* Submit button */}
        <button id="type" type="submit">
          Submit
        </button>
      </form>

      {/* Display the message */}
      {message && <p>{message}</p>}

      <p id="have">
        Do not have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default SignIn;
