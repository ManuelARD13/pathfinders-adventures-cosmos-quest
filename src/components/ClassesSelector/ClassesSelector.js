import React from "react";
import "./ClassesSelector.css"

function ClassesSelector({ setSelectionStage, gender, raze, characterClass, useSelectClass, setCharacterClass }) {
    
    return (
        <>
        <div className="displayClassesSelectorsContainer">
            <input type={"button"} value="Return" onClick={() => {
                setSelectionStage("razes")
                setCharacterClass(undefined)
                }} />
            <p>Choose your class</p>
            <div>
                    <p>Add Class Stats Calculation...</p>
            </div>
            <form className="formClasses">
                {
                gender === "male" ? 
                    raze.availableClasses.male.map((pClass) => 
                        <div className="classContainer">
                            <input type="radio" name="classes" className="classSelectors" id={pClass.className} />
                            <label className="classesLabels" htmlFor={pClass.className} id={`${pClass.className}Label`} onClick={useSelectClass}><img src={pClass.classIcon} alt={pClass.className} id={pClass.className}></img></label>
                            <p>{pClass.className}</p>
                        </div>
                    ) 
                    :
                    raze.availableClasses.female.map((pClass) => 
                        <div className="classContainer">
                            <input type="radio" name="classes" className="classSelectors" id={pClass.className} />
                            <label className="classesLabels" htmlFor={pClass.className} id={`${pClass.className}Label`} onClick={useSelectClass}><img src={pClass.classIcon} alt={pClass.className} id={pClass.className} /></label>
                            <p>{pClass.className}</p>
                        </div>
                    )
                }
            </form>
            <input type="button" className="continueButton" value="Comfirm Selections" id="comfirmClass" disabled />
        </div>
        <div className="displayClassesDescriptionContainer">
          <p>
            {
                characterClass !== undefined ?
                characterClass.className[0].toUpperCase() + characterClass.className.substring(1) 
                : ""
            }
          </p>
          <p>
            {
                characterClass !== undefined ?
                characterClass.classLore 
                : ""
            }
          </p>
          <p>Class Skills</p>
          <ul>
            { characterClass !== undefined ?
            characterClass.classSkills.map((skill) =>
                <li key={skill}>{skill}</li>
            ): ""}
          </ul>
        </div>
        </>
    )
}

export { ClassesSelector }