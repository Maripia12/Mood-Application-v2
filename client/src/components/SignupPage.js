import React from 'react'
import './../css/SignupPage.css'
import { Header } from './../components/Header'

export class SignupPage extends React.Component {


    constructor(prop){
        super(prop);
        this.state = {username: '',password:'',first_name:'',last_name:'',password2:'',email:''};
        
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleFirstName=this.handleFirstName.bind(this);
        this.handleLastName=this.handleLastName.bind(this);
        this.handleUsername=this.handleUsername.bind(this);
        this.handlePassword2=this.handlePassword2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.GotoLogin=this.GotoLogin.bind(this);
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
      }
      handlePassword(event){
        this.setState({password:event.target.value});
      
      }
      handleUsername(event) {
        this.setState({username: event.target.value});
      }
      handlePassword2(event){
        this.setState({password2:event.target.value});
      
      }
      handleFirstName(event){
          
        this.setState({first_name: event.target.value});
      }

      handleLastName(event){
          
        this.setState({last_name: event.target.value});
      }

      handleSubmit(event) {
        event.preventDefault();
        let data={
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            username:this.state.username,
            email:this.state.email,
            password:this.state.password,
            password2:this.state.password2,
        };
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      };
      fetch('/api/signup', requestOptions)
          .then(response => response.json())
          .then(data => 
              {
                  if(data.success){
                  alert(data.message+"\nPlease Login to continue.");
                  //localStorage.setItem("token",data.token);
                  window.location.href="/login";
                  }
                  else{
                      alert(data.message);
                  }
              });


console.log(data);

//alert(this.state.username+ "hello"+ this.state.first_name,this.state.last_name,this.state.email,this.state.password,this.state.password2);
    }

    GotoLogin(event){
        event.preventDefault();
        window.location.href="/login";
    }



    render(){
        if(localStorage.getItem("token")){
            window.location.href="/Homepage";
        }
    return (
        <div id="main-login2">
            <Header />
            <h3 id="form-heading">Sign Up</h3>
                <form id="main-form">
                        <label className="formLabel">First Name</label>
                        <input className="formInput" value={this.state.first_name} onChange={this.handleFirstName} id ="firstName" for="firstName" />

                        <label className="formLabel">Last Name</label>
                        <input className="formInput" value={this.state.last_name} onChange={this.handleLastName} id ="lastName" for="lastName" />

                        <label className="formLabel">Username</label>
                        <input className="formInput" value={this.state.username} onChange={this.handleUsername}  id ="username" for="username" />

                    
                        <label className="formLabel">Email</label>
                        <input className="formInput" value={this.state.email} onChange={this.handleEmail} id ="email" for="email" />

                    
                       <label className="formLabel">Password</label>
                        <input className="formInput" value={this.state.password} onChange={this.handlePassword} id ="password" type="password" for="password" />

                        <label className="formLabel">Confirm Password</label>
                        <input className="formInput" value={this.state.password2} onChange={this.handlePassword2} type="password" id ="confirmPassword" for="password" />
<div className="btn-r">
<button onClick={this.handleSubmit} id="btn">Sign up</button>

    <button onClick={this.GotoLogin} className="btn-l" id="btn">Login</button>
                   
</div>

                </form>
                <img className= "handnote" src= "https://images.unsplash.com/photo-1569229569803-69384f5efa83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHF1b3Rlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></img>
            
        </div>
    )
    }
}
