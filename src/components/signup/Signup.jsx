import React from 'react';
import './signup.css';


  
export const Signup=()=>{  
  return (
    <section id="signup">
    <div className="sign">
      <header className="App-header">
        <form onSubmit={(e) => { }}>
          <h4 className='head1'> Learning Adda</h4>
          <h5>Sign-Up</h5>
          <label >
            Name:
          </label><br />
          <input type="text" required  /><br />
          <label>
            Email:
          </label><br />
          <input type="email" required  /><br />
          <label>
            Password:
          </label><br />
          <input type="password" required /><br />
          <label>
            Confirm Password:
          </label><br />
          <input type="password"  required  /><br />
          <label >
            Age:
          </label><br />
          <input type="text"required  /><br />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
    </section>
  )
}


export default Signup;