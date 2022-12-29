import React from "react";
import "./DisplayScreen.css"

function DisplayScreen({ playableRazes, gender, useSelectGender, raze, useSelectRaze }){
  return(
      <section>
          <h2>Create Your Character</h2>
          <div>
              <legend>Character Name</legend>
              <input type={"text"} placeholder="Character Name" />

              <legend>Character Gender</legend>
              <label htmlFor="genderMale">Male</label>
              <input type={"radio"} name="gender" className="genderRadioSelectors" value="male" id="genderMale" onChange={useSelectGender} />

              <label htmlFor="genderFemale">Female</label>
              <input type={"radio"} name="gender" className="genderRadioSelectors" value="female" id="genderFemale" onChange={useSelectGender} />

              <p>Choose your raze</p>
              <form id="formRazes">
              {
                  playableRazes.map((raze) => {
                    let url
                    gender === "female" ? url = raze.razeImgFemale : url = raze.razeImgMale
                  return(
                    <>
                      <label className="razesLabels" htmlFor={raze.razeName} id={`${raze.razeName}Label`} onClick={useSelectRaze}><img src={url} alt={raze.razeName} id={raze.razeName}></img></label>
                      <input type="radio" name="razes" className="razesSelectors" id={raze.razeName} />
                    </>)
                    })
              }
              </form>
          </div>
          <div>
            <img src={gender === "male" ? raze.razeImgMale : raze.razeImgFemale} alt={raze.razeName} />
          </div>
          <div><p></p></div>
      </section>
    )
}

export { DisplayScreen }