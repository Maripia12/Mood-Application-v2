import React from 'react'
import './../css/LoginPage.css'


import { Header } from './../components/Header'


//export const LoginPage = () => {
export class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: '',password:''};
    
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.GotoSignup=this.GotoSignup.bind(this);
      }
    
      handleEmail(event) {
        this.setState({username: event.target.value});
      }
      handlePassword(event){
        this.setState({password:event.target.value});
      
      }
    
      handleSubmit(event) {
          event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email:this.state.username,password:this.state.password })
        };
        fetch('/api/login', requestOptions)
            .then(response => response.json())
            .then(data => 
                {
                    if(data.success){
                    alert(data.message);
                    localStorage.setItem("token",data.token);
                    localStorage.setItem("user_id",data.msg._id);
window.location.href="/Homepage";
                    }
                    else{
                        alert("Invalid Email or Password");
                    }
                });
      }

      GotoSignup(event){
        event.preventDefault();
        window.location.href="/signup";
    }


      render(){
          if(localStorage.getItem("token")){
              window.location.href="/Homepage";
          }
          return(


   
        
            
<div id="main-login">
<Header />

             <h3 id="form-heading">Login</h3>
                 <form id="main-form">
                         <label className="formLabel">Email</label>
                         <input className="formInput" type="text" value={this.state.username} onChange={this.handleEmail} id ="email" for="email" />

                         <label className="formLabel">Password</label>
                         <input className="formInput" type="password" value={this.state.password} onChange={this.handlePassword} id ="password" for="password" />
<div className="btn-r">
<button type="submit" onClick={this.handleSubmit} id="btn">Login</button>
<button type="submit" onClick={this.GotoSignup} id="btn" className="btn-l">Sign Up</button>
                  
</div>
                       
                 </form>
         <img className= "turtle" src="https://cdn.shopify.com/s/files/1/1751/8357/files/whats_not_to_love.jpg?v=1537129475"/>    
 
</div>


 
 

);
}
}





/* // export const LoginPage = () => 

     

//}
//     return (
//         <div id="main-login">
//             <h3 id="form-heading">Login</h3>
//                 <form id="main-form">
//                         <label className="formLabel">Email</label>
//                         <input className="formInput" id ="email" for="email" />

//                         <label className="formLabel">Password</label>
//                         <input className="formInput" id ="password" for="password" />

//                         <button id="btn">login</button>
                   
//                 </form>
            
//         </div>
//     )
// } */
