import React from 'react'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Contact from './components/contact/Contact'
import  Teacher  from './components/teacher/Teacher'
const port =process.env.PORT || 8000;
const App = () => {
  return (
    <>
     <Login />
     <Signup/>
     <Contact />
     <Teacher />
 
    </>
  );
}
App.listen(port,()=>{
  console.log(`${port}`);
})
export default App;
