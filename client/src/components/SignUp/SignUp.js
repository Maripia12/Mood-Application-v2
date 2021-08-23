import React from "react";
import "./signup.css";


function SignUp () {

    return(


<div class="row">
        <div class = "col-md-6">
            <div class = "container2">
          <h1>Sign Up</h1>

          <form class= 'form signup-form'>
            <div class = 'form-group'>
              <label for = 'name-signup'>Name: </label>
              <input class = 'form-input' type='text' id='name-signup'></input>
           </div>
           <div class = 'form-group'>
             <label for = 'email-signup'> Email: </label>
             <input class= 'for-input' type = 'text' id= 'email-signup'></input>
           </div>
            <div class = 'form-group'>
             <label for = 'pasword-login'> Password: </label>
             <input class= 'for-input' type = 'password' id= 'password-login'></input>
           </div>
          </form>
          </div>
         </div>
        </div>
  )

}

export default SignUp;