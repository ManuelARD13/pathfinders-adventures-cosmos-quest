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
              <legend>Your Character Name</legend>
              <input type={"text"} placeholder="Adventurer Name..." onChange={getUserTextInput} required />

              <legend>Select Gender</legend>
              <div className="genderButtons">
                <input type={"radio"} name="gender" className="genderRadioSelectors" value="male" id="genderMale" onChange={useSelectGender} required />
                <label htmlFor="genderMale" className="genderLabels" id="maleLabel"></label>

                <input type={"radio"} name="gender" className="genderRadioSelectors" value="female" id="genderFemale" onChange={useSelectGender} required />
                <label htmlFor="genderFemale" className="genderLabels" id="femaleLabel"></label>
              </div>
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
          </div>
          <input type="button" className="continueButton" value="Comfirm Selections" id="comfirmSelections" disabled />
          <div className="displayRazesDescriptionContainer">
          
          { raze !== "" ?
            <>
              <p className="razeLoreContainer">{raze.razeLore}</p>
              <p>Raze Skills</p>
              <p className="divider"></p>
              <ul className="razeSkillsList">{
                raze.razeSkills.map((skill) =>
                    <li key={skill}>{skill}</li>
                ) }
              </ul>
            </> 
            : <p className="noRazeContent">
                Welcome to a world where noble warriors battle mighty dragons and powerful wizards explore long-forgotten tombs. This is a world of fantasy, populated by mysterious elves and savage orcs, wise dwarves and wily gnomes. In this game, your character can become a master swordsman who has never lost a duel, or a skilled thief capable of stealing the crown from atop the king's head. You can play a pious cleric wielding the power of the gods, or unravel the mysteries of magic as an enigmatic sorcerer. The world is here for you to explore, and your actions will have a profound inf luence in shaping its history.
              </p>
          }
        </div>
        </>
    )
}

export { RazesSelector }