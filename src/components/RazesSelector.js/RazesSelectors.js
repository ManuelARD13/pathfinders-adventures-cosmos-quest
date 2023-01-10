import React from "react";

function RazesSelector({ setSelectionStage , characterName, setCharacterName, gender, raze, useSelectRaze, useSelectGender, playableRazes , useDisplayImg}) {
  
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
        <div>
              <legend>Character Name</legend>
              <input type={"text"} placeholder="Character Name" onChange={getUserTextInput} required />

              <legend>Character Gender</legend>
              
              <input type={"radio"} name="gender" className="genderRadioSelectors" value="male" id="genderMale" onChange={useSelectGender} required />
              <label htmlFor="genderMale">Male</label>

              <input type={"radio"} name="gender" className="genderRadioSelectors" value="female" id="genderFemale" onChange={useSelectGender} required />
              <label htmlFor="genderFemale">Female</label>

              <p>Choose your raze</p>
              <form id="formRazes">
              {
                  playableRazes.map((raze) => {
                    let url
                    gender === "female" ? url = raze.razeImgFemale : url = raze.razeImgMale
                  return(
                    <>
                      <input type="radio" name="razes" className="razesSelectors" id={raze.razeName} style={{display: "none"}} onChange={useSelectRaze} disabled={true} />
                      <label className="razesLabels" htmlFor={raze.razeName} id={`${raze.razeName}Label`}><img src={url} alt={raze.razeName} id={raze.razeName} onClick={useDisplayImg}></img></label>
                      
                    </>)
                    })
              }
              </form>
              <input type="button" className="continueButton" value="Comfirm Selections" id="comfirmSelections" disabled />
          </div>
          <div>
          <p>{raze.razeLore}</p>
          <p>
            An elf (pl: elves) is a type of humanoid supernatural being in Germanic mythology and folklore (especially North Germanic mythology and folklore). In medieval Germanic-speaking cultures, elves generally seem to have been thought of as beings with magical powers and supernatural beauty, ambivalent towards everyday people and capable of either helping or hindering them.[1] However, the details of these beliefs have varied considerably over time and space and have flourished in both pre-Christian and Christian cultures.
          </p>
        </div>
        </>
    )
}

export { RazesSelector }