import React from "react";
import "./ClassesSelector.css"

function ClassesSelector({ setScreen, setSelectionStage, gender, raze, characterClass, useSelectClass, setCharacterClass}) {
    
    return (
        <>
        <div className="displayClassesSelectorsContainer">
            <input type={"button"} value="Return" onClick={() => {
                setSelectionStage("razes")
                setCharacterClass(undefined)
                }} />
            <p>Choose your class</p>
            <div>
                <ul>
                    <li>CON</li>
                    <li>CON</li>
                    <li>CON</li>
                </ul>
            </div>
            <form className="formClasses">
                {
                gender === "male" ? 
                    raze.availableClasses.male.map((pClass) => 
                        <div className="classContainer">
                            <input type="radio" name="classes" className="classSelectors" id={pClass.className} />
                            <label className="classesLabels" htmlFor={pClass.className} id={`${pClass.className}Label`} onClick={useSelectClass}><img src={pClass.classIcon} alt={pClass.className} id={pClass.className} /></label>
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
            <input type="button" className="continueButton" value="Comfirm Selections" onClick={() => setScreen("CharacterProfile")} />
        </div>
        <div className="displayClassesDescriptionContainer">
          <p>class Descrtition</p>
          <p>
            An elf (pl: elves) is a type of humanoid supernatural being in Germanic mythology and folklore (especially North Germanic mythology and folklore). In medieval Germanic-speaking cultures, elves generally seem to have been thought of as beings with magical powers and supernatural beauty, ambivalent towards everyday people and capable of either helping or hindering them.[1] However, the details of these beliefs have varied considerably over time and space and have flourished in both pre-Christian and Christian cultures.
          </p>
        </div>
        </>
    )
}

export { ClassesSelector }