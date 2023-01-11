import React from "react";
import { StatsList } from "../StatsList/StatsList";
import "./RazesSelector.css"

function RazesSelector({ setCharacterName, gender, raze, characterStats ,useSelectRaze, useSelectGender, playableRazes , useDisplayImg }) {
  
    const getUserTextInput = (e) => {
      let characterName = e.target.value
      setCharacterName(characterName)
      if(characterName !== "") {
        const razesRadioSelectors = Array.from(document.getElementsByClassName("razesSelectors"))
        razesRadioSelectors.forEach((selector) => {
          selector.disabled = false
        })
      }
    }

    return(
        <>
        <div className="displayRazesSelectorsContainer">
              <legend>Character Name</legend>
              <input type={"text"} placeholder="Adventurer Name..." onChange={getUserTextInput} required />

              <legend>Character Gender</legend>
              
              <input type={"radio"} name="gender" className="genderRadioSelectors" value="male" id="genderMale" onChange={useSelectGender} required />
              <label htmlFor="genderMale" className="genderLabels" id="maleLabel"></label>

              <input type={"radio"} name="gender" className="genderRadioSelectors" value="female" id="genderFemale" onChange={useSelectGender} required />
              <label htmlFor="genderFemale" className="genderLabels" id="femaleLabel"></label>

              <StatsList characterStats={characterStats} raze={raze }/>

              <p>Choose your raze</p>
              <form className="formRazes">
              {
                  playableRazes.map((raze) => {
                    let url
                    gender === "female" ? url = raze.razeImgFemale : url = raze.razeImgMale
                  return(
                    <div className="razeContainer">
                      <input type="radio" name="razes" className="razesSelectors" id={raze.razeName} style={{display: "none"}} onChange={useSelectRaze} disabled={true} />
                      <label className="razesLabels" htmlFor={raze.razeName} id={`${raze.razeName}Label`}><img src={url} alt={raze.razeName} id={raze.razeName} onClick={useDisplayImg}></img></label>
                      <p>{raze.razeName}</p>
                      
                    </div>)
                    })
              }
              </form>
              <input type="button" className="continueButton" value="Comfirm Selections" id="comfirmSelections" disabled />
          </div>
          <div className="displayRazesDescriptionContainer">
          <p>{raze.razeLore}</p>
          <p>Raze Skills</p>
          <ul>
            {raze !== "" ?
            raze.razeSkills.map((skill) =>
                <li key={skill}>{skill}</li>
            ): ""}
          </ul>
        </div>
        </>
    )
}

export { RazesSelector }