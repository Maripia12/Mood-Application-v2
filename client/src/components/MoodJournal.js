import React, {useState} from 'react'
import './../css/MoodJournal.css'

export const MoodJournal = () => {

  if(moodState=angry){
  const textArea = document.querySelector(".select-mood")
  textArea.background-color = (rgb(245, 45, 45)
  }
  else
    const [moodState,setMoodState] = useState('')


  // else if (state = mood:anxious){

    // var colors = [
    //   
    //     value:'angry',
    //     label:"rgb(245, 45, 45)"
    //   }
    //   {
    //     value:'anxious',
    //     label:"orange"
    //   },
    //   {
    //     value:'energetic'
    //     label:"yellow"
    //   },
    //   {
    //     value:'calm',
    //     label:"steelblue"
    //   },
    //   {
    //     value:'sad',
    //     label:"rgb(223, 138, 223)"
    //   },
    //   {
    //     value:'happy',
    //     label:"salmon"
    //   },
    //    {
    //     value:'tired',
    //     label:"#89cfeb"
    //   }
    // ];
    // var [setbgcolor, ddlvalue]=useState(colors.label);
    // var ddlhandle = e =>
    // {
    //   ddlvalue(e.label);
    // }


    return (

   
     <div id="container">
            <div id="mainP"> Welcome to your Mood Journal 📝</div>
                 <br />
                <select 
                className= "select-mood"
                onChange={(e)=> {
                  const selectedMood = e.target.value;
                  
                  setMoodState(selectedMood);
                }}
                >
                    <option disabled selected>What is your mood today?</option>
                    <option className= "angry" value="angry">Frustrated</option>
                    <option className= "anxious" value="anxious">Anxious</option>
                    <option className= "energetic" value="energetic">Energetic</option>
                    <option className= "calm" value="calm">Calm</option>
                    <option className= "sad" value="sad">Sad</option>
                    <option className= "focused" value="focused">Focused </option>
                    <option className= "happy" value="happy">Happy</option>
                    <option className= "tired" value="tired">Tired</option>
                     
                {/* <button id="btn" className="searchBtn">Search</button> */}



                </select>

             <div>
 
        <div class="container">
          <div class="row body">
            <article class ="card">
            <div className="select"></div>
               <p class= "journal">
                <textarea className = "select-mood" useState = "color"
                cols="120" rows="30" name="journal">
                </textarea>
                  </p>
               <input class="btn btn-save" type="submit" value="Save" />
               <input class="btn btn-delete" type="submit" value="Delete" />
               </article>
          </div>
        </div>
    </div>
   </div>
   
 

 
 
           
    )
}
