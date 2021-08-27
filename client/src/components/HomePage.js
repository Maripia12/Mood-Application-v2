import React,{props, useState} from 'react'
// import Modal from 'react-modal';
import {Modal} from './Modal.js'
import './../css/HomePage.css'

import { Navbar } from './../components/Navbar'
import { AllMoods } from './AllMoods'

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

//   Modal.setAppElement(document.getElementById('root'));

export class  HomePage extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     show: false
        //   };
        //const [option,setOption] = useState()
        //const [textVal,setTextVal] = useState()
        
        
        this.state = {option: '',txtVal:'',quote:'',date:new Date().toJSON().slice(0,10).replace(/-/g,'/'),allMoods:[
            'angry',
            'anxious',
            'energetic',
            'calm',
            'sad/depressed',
            'focused',
            'happy',
            'tired'],show:false};
            
            this.showModal = this.showModal.bind(this);
            this.hideModal = this.hideModal.bind(this);
            

        let prompt;
        let quote ="";
        
    let subtitle;
    //const [modalIsOpen, setIsOpen] = React.useState(false);

    this.handleChange=this.handleChange.bind(this);
    this.handleTextVal=this.handleTextVal.bind(this);
    this.handlePostQuote=this.handlePostQuote.bind(this);
    this.gotoAllMoods=this.gotoAllMoods.bind(this);
    this.openModal=this.openModal.bind(this);
    this.afterOpenModal=this.afterOpenModal.bind(this);
    this.closeModal=this.closeModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = (event) => {
        this.setState({ show: false });
        this.handlePostQuote(event);
        window.location.href="/AllMoods"
      };
   



     handleChange(event){
         this.setState({option:event.target.value});
        //setOption(event.target.value)
        console.log(event.target.value);
    
        fetch(`https://zenquotes.io/api/quotes/author/${event.target.value}/586f0cb160dc959e5316dee371007b01a9611f8c?custom=true`).then(response => response.json()).
        then(data => {
            
        var randomIndex = Math.floor(Math.random() * (data.length + 1));
            
        console.log(data[randomIndex].q);
    
        this.setState({quote:data[randomIndex].q});
        // console.log(quote);
        
        });
    }
     handleTextVal(event){
         this.setState({txtVal:event.target.value});
        //setTextVal(event.target.value)
        console.log(event.target.value);
    }

     handlePostQuote(event) {
         
        var date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
        
        let userId= localStorage.getItem("user_id")
        event.preventDefault();
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
        },
          body: JSON.stringify({ mood:this.state.option ,prompt:prompt,user_id:userId, date:date,message:this.state.txtVal,quote:this.state.quote})
      };
      fetch('/api/addQuote', requestOptions)
          .then(response => response.json())
          .then(data => 
            {
                  if(data.success){
                  alert(data.message);
                  console.log("success");
                  }
                  else{
                    console.log("error");
                  }
              });
    }



     gotoAllMoods(){
        window.location.href="/AllMoods";

    }

    //Modallllls

  openModal() {
    //setIsOpen(true);
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  closeModal() {
    //setIsOpen(false);
  }

  ///getting quote
//   function gettingQuote(){
//     // event.preventDefault();
//     console.log(option);
    
//     fetch(`https://zenquotes.io/api/quotes/author/${option}/586f0cb160dc959e5316dee371007b01a9611f8c?custom=true`).then(response => response.json()).
//     then(data => {
        
//     var randomIndex=Math.floor(Math.random() * (data.length + 1));
        
//         console.log(data[randomIndex]);

//     quote=data[randomIndex]
    
//     });
//   }
  
//   function twoCalls(){
//     handleChange()
//     gettingQuote()
//   }
render(){

    if(localStorage.getItem("token")){
    return (
        <body>
            <Navbar/>
            <div id="topContainer">
                <div>
                    <h4>Date: {this.state.date}</h4>
                </div>
                <div>
                    <button id="" className="btnTop">Today's Journal</button>
                    <button id="" className="btnTop" onClick={this.gotoAllMoods}>Past Journal Entries</button>
                </div>
                
            </div>
               
               <div id="container">
                    <label>
                        what is your mood?
                        <select name='option' onChange={this.handleChange}>
                            {this.state.allMoods.map((e)=><option value={e}>{e}</option>)}
                            
                        </select>
                    </label>

                    <div id="prompt">
                        <p>
                            {/* {if(promt)} */}
                            {prompt = `Why are you feeling ${this.state.option} today?  `}
                        </p>
                    </div>

                    <div>
                      <textarea id="textarea" onChange={this.handleTextVal}>

                      </textarea>
                      <div>
                        <button id="btnSave" className="btn" onClick={ this.showModal}>save</button>
                      </div>
                      <Modal show={this.state.show} handleClose={this.hideModal}>
                        <p>Quote for You : <b><blockquote>&ldquo;{this.state.quote}&rdquo; &mdash; <footer>Anxious</footer></blockquote></b></p>
                        </Modal>

                    </div>
               </div>
              
        </body>
    )
    }
    else{
        window.location.href="/login";
    }
}
}