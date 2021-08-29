import React, {useState} from 'react'
import './../css/MoodJournal.css'

export const MoodJournal = () => {
    const [moodState,setMoodState] = useState('')

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
                cols="100" rows="30" name="journal">
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
