import React, {useState} from 'react'
import './../css/MoodJournal.css'

export const MoodJournal = () => {
    return (
       <div id="container">
            <div id="mainP"> Welcome to your Mood Journal 📝</div>
                 <br />
                <select class= "select-mood">
                    <option disabled selected>What is your mood today?</option>
                    <option value="angry">Frustrated</option>
                    <option value="anxios">Anxious</option>
                    <option value="energetic">Energetic</option>
                    <option value="calm">Calm</option>
                    <option value="sad">Sad</option>
                    <option value="focused">Focused </option>
                    <option value="happy">Happy</option>
                    <option value="tired">Tired</option>
                     
                {/* <button id="btn" className="searchBtn">Search</button> */}
                </select>

                <div>
 
        <div class="container">
          <div class="row body">
            <article class ="card">
            <div class="journal"></div>
               <p class= "journal">
                <textarea cols="120" rows="30" name="journal">
                {/* <a href = '#'></a> */}
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
