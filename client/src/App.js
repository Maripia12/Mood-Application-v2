import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import {HomePage} from './components/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (

   <>
      <Switch>
                <Route path="/" component={HomePage} exact />
                  
                <Route path="/login" > <LoginPage/> </Route>
                <Route path="/signup" component={SignupPage} />
            </Switch>

    
   </>
  );
}

export default App;
