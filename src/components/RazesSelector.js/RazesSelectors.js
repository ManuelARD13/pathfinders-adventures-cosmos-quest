import React from "react";
import "./RazesSelector.css"

function RazesSelector({ setSelectionStage , setCharacterName, gender, raze, useSelectRaze, useSelectGender, playableRazes , useDisplayImg}) {
  
    const getUserTextInput = (e) => {
      let characterName = e.target.value
      setCharacterName(characterName)
    }

    return(
        <>
        <div className="displayRazesSelectorsContainer">
              <legend>Character Name</legend>
              <input type={"text"} placeholder="Adventurer Name..." onChange={getUserTextInput}/>

              <legend>Character Gender</legend>
              <label htmlFor="genderMale" className="genderLabels" id="maleLabel"></label>
              <input type={"radio"} name="gender" className="genderRadioSelectors" value="male" id="genderMale" onChange={useSelectGender} />

              <label htmlFor="genderFemale" className="genderLabels" id="femaleLabel"></label>
              <input type={"radio"} name="gender" className="genderRadioSelectors" value="female" id="genderFemale" onChange={useSelectGender} />

              <p>Choose your raze</p>
              <form className="formRazes">
              {
                  playableRazes.map((raze) => {
                    let url
                    gender === "female" ? url = raze.razeImgFemale : url = raze.razeImgMale
                  return(
                    <div className="razeContainer">
                      <input type="radio" name="razes" className="razesSelectors" id={raze.razeName} style={{display: "none"}} onChange={useSelectRaze}/>
                      <label className="razesLabels" htmlFor={raze.razeName} id={`${raze.razeName}Label`}><img src={url} alt={raze.razeName} id={raze.razeName} onClick={useDisplayImg}></img></label>
                      <p>{raze.razeName}</p>
                      
                    </div>)
                    })
              }
              </form>
              <input type="button" className="continueButton" value="Comfirm Selections" onClick={() => setSelectionStage("classes")} />
          </div>
          <div className="displayRazesDescriptionContainer">
          <p>{raze.razeLore}</p>
          <p>
            An elf (pl: elves) is a type of humanoid supernatural being in Germanic mythology and folklore (especially North Germanic mythology and folklore). In medieval Germanic-speaking cultures, elves generally seem to have been thought of as beings with magical powers and supernatural beauty, ambivalent towards everyday people and capable of either helping or hindering them.[1] However, the details of these beliefs have varied considerably over time and space and have flourished in both pre-Christian and Christian cultures.
          </p>
        </div>
        </>
    )
}

export { RazesSelector }