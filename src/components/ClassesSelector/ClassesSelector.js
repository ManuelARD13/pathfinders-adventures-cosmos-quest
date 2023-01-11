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
          
        {
            characterClass !== undefined ?
                <>
                    <p>
                        {characterClass.className[0].toUpperCase() + characterClass.className.substring(1)} 
                    </p>
                    <p>{characterClass.classLore}</p>
                    <p>Class Skills</p>
                    <ul>
                        {
                            characterClass.classSkills.map((skill) =>
                                <li key={skill}>{skill}</li>
                            )
                        }
                    </ul>
                </> 
                : <p>
                    The dragon roared in triumph as Valeros collapsed into the snow, blood spurting from the terrible wound in his belly. Kyra rushed to his side, praying that she wasn't too late to save his life. “I'll hold the beast off!” Seoni cried as she stepped up to the dragon, her staff flaring with defensive fire. Merisiel looked to the hulking dragon, then at the delicate sorcerer, and shook her head sadly. The adventure had just barely begun, and judging by this fight alone, they weren't getting paid enough for the job.
                </p>
        }
        </div>
        </>
    )
}

export { ClassesSelector }