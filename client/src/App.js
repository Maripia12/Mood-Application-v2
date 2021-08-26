import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import {HomePage} from './components/HomePage';
// import {Navbar} from './components/Navbar';

// import {Cover} from './components/Cover';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (

   
    
  
   
      <Switch>
            
                {/* <Route path= "/" component={Cover} exact/> */}
                <Route path="/" component={HomePage} exact />
                {/* <Navbar /> */}
                 
                  
                <Route path="/login" > <LoginPage/> </Route>
                <Route path="/signup" component={SignupPage} />

               
                
            </Switch>

   

    
   
  );
}

export default App;
