import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(
    {}
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // alert("Registration successful!");
  };

  let mainPage = () => {
    navigate('/Home');
  };

  return (
    <div className="main">
      <div className="signin-wrapper">
        <div className="signin">
          <h2
            style={{
              color: "white",
              borderBottom: "2px solid white",
              fontWeight: 500,
            }}
          >
            {" "}
            Sign In
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="name-wrapper">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                // required
              />
              <br />
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                // required
              />
            </div>
            <br />
            <div className="emial-wrapper">
              <label htmlFor="email" className="input-mail">
                Email ID:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // required
              />
            </div>
            <br />
            <div className="passwrod-wrapper">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // required
              />
              <br />
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                // required
              />
            </div>
            <br />
            <input
              type="submit"
              value="Sign In"
              onClick={()=>mainPage()}
              className="btn btn-danger"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
