import React, { useState } from "react";


import "./login.css";

export const Login = () =>{
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "Teacher",
      password: "teach1"
    },
    {
      username: "Student",
      password: "stud1"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  
  const renderForm = (
    
    <div className="form">
  
      <form onSubmit={handleSubmit}>
      
        <div className="input-container">
      
          <label>Username </label>
          <input type="text" name="uname" placeholder="username=Student"  required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" placeholder="pass=stud1" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <a href="#signup">Didn't Have Account?</a>
      </form>
    </div>
  );

  return (
    <div className="app">
     <h4>Learning Adda</h4>
      <div className="login-form">
     
        <div className="title">Log-In</div>
        {isSubmitted ?<a href="#teacher">Click to Proceed  </a>: renderForm}
      </div>
    </div>
  );
}

export default Login;