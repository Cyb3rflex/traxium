import { useState } from "react";
import "../component/signup.css";
import image from "../Images/image.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [message, setMessage] = useState(""); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    setAgreedToTerms(!agreedToTerms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreedToTerms) {
      // Store user credentials in localStorage
      localStorage.setItem("user", JSON.stringify(formData));
      setMessage("Sign up successful! You can now log in.");
      console.log("Form submitted:", formData);
      // Optionally, reset the form after submission
      setFormData({ name: "", username: "", email: "", password: "" });
      setAgreedToTerms(false);
    } else {
      alert("You must agree to the terms and conditions.");
    }
  };

  return (
    <div>
      <div id="base">
        <div id="option">
          <div id="header">
            <h1>Sign Up to KWARA RIDE</h1>
            <img className="image" src={Images} alt="" />
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <div id="first">
                <div>
                  <label>
                    Surname <br />
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>{" "}
                <br />
                <div>
                  <label>
                    Last name <br />
                    <input
                      id="user"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>{" "}
              <br />
              <div>
                <label>
                  Email <br />
                  <input
                    id="email"
                    type="email"
                    placeholder="        Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>{" "}
              <br />
              <div>
                <label>
                  Password <br />
                  <input
                    id="pass"
                    placeholder="    6+ characters"
                    type="password"
                    name="password"
                    minLength="6"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </div>{" "}
            <br />
            <div>
              <label id="words">
                <input
                  id="check"
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={handleCheckboxChange}
                  required
                />
                <p id="agree">
                  I agree with KWARA RIDE terms, privacy <br />
                  policy, and default notification setting
                </p>
              </label>
            </div>
            <button id="button" type="submit">
              Create account
            </button>
          </form>

          {/* Display success message */}
          {message && <p style={{ color: "green" }}>{message}</p>}

          <p id="note">
            Already have an account?{" "}
            <Link to="/signin" rel="">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
