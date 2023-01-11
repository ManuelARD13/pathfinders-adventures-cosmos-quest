import React from "react";

function ClassesSelector({ setSelectionStage, gender, raze, characterClass, useSelectClass, setCharacterClass }) {
    
    return (
        <>
        <div>
            <input type={"button"} value="Return" onClick={() => {
                setCharacterClass(null)
                setSelectionStage("razes")
                }} />
            <p>Choose your class</p>
            <div>
                    <p>Add Class Stats Calculation...</p>
            </div>
            {
               gender === "male" ? 
                raze.availableClasses.male.map((pClass) => 
                    <>
                        <input type="radio" name="classes" className="classSelectors" id={pClass.className} />
                        <label className="classesLabels" htmlFor={pClass.className} id={`${pClass.className}Label`} onClick={useSelectClass}><img src={pClass.classIcon} alt={pClass.className} id={pClass.className}></img></label>
                    </>
                ) 
                 :
                raze.availableClasses.female.map((pClass) => 
                    <>
                        <label className="classesLabels" htmlFor={pClass.className} id={`${pClass.className}Label`} onClick={useSelectClass}><img src={pClass.classIcon} alt={pClass.className} id={pClass.className} /></label>
                        <input type="radio" name="classes" className="classSelectors" id={pClass.className} />
                    </>
                )
            }
            <input type="button" className="continueButton" value="Comfirm Selections" id="comfirmClass" disabled />
        </div>
        <div>
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