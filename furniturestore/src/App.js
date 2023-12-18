
import React from 'react';
//import SignUp from './SignUpForm/SignUp';

import LoginPage from './LoginForm/LoginPage';



const App = () => {
  return (
    
    <div>
      
      <LoginPage/>
    </div>
  );
};

export default App;



/*import React from 'react';
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import Login from './LoginForm/LoginPage';
import Navigate from './Components/Navigate';
import SignUpForm from './SignUpForm/SignUp';
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

export default App; */