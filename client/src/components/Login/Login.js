import React from "react";
import "./login.css";



function Login() {
    return (
 
    <div class="row">
        <div class = "col-md-6">
            <div class = "container1">
          <h1>Login</h1>

        <form class= 'form login-form'>
            <div class = 'form-group'>
              <label for = 'email-login'>Email Address: </label>
              <input class = 'form-input' type='text' id='email-login'></input>

           </div>
           <div class = 'form-group'>
             <label for = 'pasword-login'> Password: </label>
             <input class= 'for-input' type = 'password' id= 'password-login'></input>
           </div>
           <div class = 'form-group'>
             <span>How are you feeling today?</span>
             <div class = 'dropdown-options'>
               <select class="dropdown btn dropdown-mood" id="dropdownMoodBtn">
                 <option class = 'dropdown-mood' value="Mood">Mood</option>
                 <option class = 'dropdown-mood1' value="">Happy</option>
                 <option class = 'dropdown-mood2' value="Mood">Sad</option>
                 <option class = 'dropdown-mood2' value="Mood">Anxios</option>
                 </select>
                </div>
            </div>
        </form>
    </div>
</div>
</div>
    
    
    )

}

export default Login;