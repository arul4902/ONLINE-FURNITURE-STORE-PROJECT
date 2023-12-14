import React from 'react';
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import Login from './Components/LoginPage';
import Navigate from './Components/Navigate';
import SignUpForm from './Components/SignUp';
function App() {
  return (
    <div className="App">
    <h1>STOCK  MANAGEMENT  SYSTEM </h1>
    
      <BrowserRouter>
    <Navigate></Navigate>
        <Routes>
          <Route path='/login' element=<Login/> ></Route>
          <Route path='/signup' element=<SignUpForm/> ></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;