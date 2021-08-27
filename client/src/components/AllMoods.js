import React from 'react'
import './../css/AllMoods.css'
import { Navbar } from './Navbar';

export class AllMoods extends React.Component{
    constructor(props){
        super(props);

        this.state={
            allData:[]
        }

        this.getAllMoods=this.getAllMoods.bind(this);
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
              <div>
                    <button id="" className="btnTop">Today's Journal</button>
                    <button id="" className="btnTop" onClick={this.gotoAllMoods}>Past Journal Entries</button>
                </div>
              <div >
                  {this.state.allData.map((moods)=>(
                      <div id="eachMood">
                            <h3> {moods.date.slice(0,10)}</h3>
                        <div id="eachMoodInner">
                                {/* <h2>Date : </h2>
                                <p>{moods.date.slice(0,10)}</p>
                                <h3>Mood : <span>{moods.mood}</span></h3>
                            <div>
                                <h3>Prompt : {moods.prompt}</h3>
                                <h3>Message: <span>{moods.message}</span></h3>
                             </div> */}

                            <div className = "heading">
                                {/* <h2>Mood: </h2> */}
                                <h1>{moods.mood}</h1>
                            </div>
                            <div className = "heading">
                                <h4> </h4>
                                <p>{moods.prompt}</p>
                            </div>
                            <div className = "heading">
                                <h4>Quote: </h4>
                                <p>{moods.quote}</p>
                            </div>
                            <div className = "heading">
                                <h4>Journal Entry:</h4>
                                <p>{moods.message}</p>
                            </div>
                                                
                         </div>
                         </div>
                  ))}
              </div>
              </>
          )
      }
}