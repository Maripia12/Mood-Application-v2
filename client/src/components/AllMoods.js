import React from 'react'
import './../css/AllMoods.css'
import {Modal} from './Modal.js'
import { Navbar } from './Navbar';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export class AllMoods extends React.Component{

    
    constructor(props){
        super(props);

        this.state={
            allData:[],
            show:false,
            mood:'',
            message:'',
            id:'',
            prompt:''

        }

           
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
this.handleMood=this.handleMood.bind(this);
this.handleMessage=this.handleMessage.bind(this);

this.handlePrompt=this.handlePrompt.bind(this);
        this.getAllMoods=this.getAllMoods.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.mood);
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
           body:JSON.stringify({mood:this.state.mood,message:this.state.message,prompt:this.state.prompt})
        };
        fetch(`/api/updateQuote/${this.state.id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                window.location.href="/Allmoods"
            })
    }

    showModal = (id,mood,message,prompt) => {
        this.setState({ show: true,id:id,mood:mood,message:message,prompt:prompt });

        // fetch(`/api/updateQuote/${id}`).then(res=>{
        //     return res.json()
        // }).then(data=>{
        //     console.log(data);
        // })
      };
    
      hideModal = () => {
        this.setState({ show: false });
        window.location.href="/AllMoods"
      };

      btnDelete=(id)=>{
          
          if (window.confirm("Are you sure?")) {
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
               
            };
            fetch(`/api/deleteQuote/${id}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    alert(data.message);
                    window.location.href="/Allmoods"
                })
        }
          else{
return false;
          }
      }

handleMood(event){
this.setState({mood:event.target.value});
}

handlePrompt(event){
    this.setState({prompt:event.target.value});
    }

handleMessage(event){

    this.setState({message:event.target.value});
}

    async getAllMoods(){
        const user_id=localStorage.getItem("user_id");
        const res = await fetch(`/api/getQuote/${user_id}`);
        const data = await res.json();
        return data.data;
    }

    async componentDidMount() {
        const allData = await this.getAllMoods();
        this.setState({ allData });
      }

      render(){
          return(
              <>
              <Navbar/>
              <div >
                  {this.state.allData.map((moods)=>(
                      <div id="eachMood">
                            <h3> 🗓️{moods.date.slice(0,10)}</h3>
                        <div id="eachMoodInner">
                            <div className = "heading">
                                <h1>{moods.mood}</h1>
                            </div>
                            <div className = "heading">
                                <h4></h4>
                                <p>{moods.prompt}</p>
                            </div>
                            <div className = "heading">
                                <h4>Entry: </h4>
                                <p>{moods.message}</p>
                            </div>
                                                
                         </div>
                         <div id="btns">
                            <button id="btnEdit" className="btn" onClick={()=>this.showModal(moods._id,moods.mood,moods.message,moods.prompt)}>Edit</button>
                            <button id="btnDelete" onClick={()=>this.btnDelete(moods._id)} className="btn">Delete</button>
                         </div>
                         </div>
                  ))}
              </div>
              <div>

              <Modal show={this.state.show} handleClose={this.hideModal}>
                 <div id="modal-form">
                    <form id="main-form">
                         <label className="formLabel">Mood</label>
                         <input className="formInput" type="text" value={this.state.mood} onChange={this.handleMood} id ="email" for="email" />

                         <label className="formLabel">Prompt</label>
                         <input className="formInput" type="text" value={this.state.prompt} onChange={this.handlePrompt} id ="e" for="e" />


                         <label className="formLabel">Message</label>
                         <input className="formInput" type="text" value={this.state.message} onChange={this.handleMessage} id ="password" for="password" />
                        <button type="submit" onClick={this.handleSubmit} id="btn">Update</button>
                    </form>
                 </div>
                </Modal>
              </div>
              </>
          )
      }
}