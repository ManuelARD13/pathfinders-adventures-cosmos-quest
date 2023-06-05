import React from "react";
import { StatsList } from "../StatsList/StatsList";
import "./ClassesSelector.css"
import { useContext } from "react";
import { SelectorsContext } from "../../context/SelectorsCtx";
import { ClassIcon } from "../ClassIcon/ClassIcon";

function ClassesSelector() {

  const { 
      playableClasses,
      setSelectionStage, 
      gender, 
      raze, 
      characterClass, 
      characterStats, 
      setCharacterClass, 
      isSelectable 
    } = useContext(SelectorsContext)

	/*Creating totalScores Object for classRequeriments comparisons*/
  const totalScores =  {}

  for (const [key, value] of Object.entries(characterStats)) {
    for(const [modKey, modValue] of Object.entries(raze.razeModifiers)){
      if(modKey === key && modValue !== 0) {
        totalScores[`${key}`] = value + modValue
      } else if(modKey === key && modValue === 0) {
        totalScores[`${key}`] = value
      }
    }
  }

  const getAvailableClasses = (raze, gender) => {
    const availableClasses = playableClasses.filter((pClass) => {

      const className = pClass.className
      const availableClasses = raze.availableClasses[`${gender}`]
      
      return availableClasses.find((sClass) => className === sClass)

    })

    return availableClasses

  }

 
  return (
  	<>
      <input type={"button"} value="Return" className="returnButton"
        onClick={() => {
                				setSelectionStage("razes")
                				setCharacterClass(undefined)
                }} />

        <div className="displayClassesSelectorsContainer">
            
          <p>Choose your class</p>
          <p className="divider"></p>
            
          { isSelectable 
						? 
							<p className="yesScoreMessage">Great! You've enough Stats Scores.</p> 
						:
							<p className="noScoreMessage">Sorry. No enough Stats Scores.</p>
          }
            
        	<div>
            <StatsList />
          </div>

          <p className="divider"></p>
          <form className="formClasses">
						{/* TODO: Try ternary operator just in the object to iterate on, USE A FUNCTION OR COMPONENT */}
            { getAvailableClasses(raze, gender).map((pClass) => 
              <ClassIcon totalScores={totalScores} pClass={pClass} />
            )}
            {/* { gender === "male" 
						? getAvailableClasses(raze, gender).map((pClass) => 
                <div className="classContainer">
                  <input type="radio" name="classes" className="classSelectors" id={pClass.className} 
										onClick={() => setTotalScores(totalScores)} 
									/>
                  <label className="classesLabels" htmlFor={pClass.className} id={`${pClass.className}Label`} 
										onClick={useSelectClass}
									>
											<img src={pClass.classIcon} alt={pClass.className} id={pClass.className}>
											</img>
									</label>
                  <p>{pClass.className}</p>
                </div>
              ) 
            :	raze.availableClasses.female.map((pClass) => 
                <div className="classContainer">
                <input type="radio" name="classes" className="classSelectors" id={pClass.className} 
								onClick={() => setTotalScores(totalScores)} 
								/>
                            <label className="classesLabels" htmlFor={pClass.className} id={`${pClass.className}Label`} onClick={useSelectClass}><img src={pClass.classIcon} alt={pClass.className} id={pClass.className} /></label>
                            <p>{pClass.className}</p>
                        </div>
                    )
                } */}
            </form>
        </div>
        <input type="button" className="continueButton" value="Comfirm Selections" id="comfirmClass" 
          disabled={ !isSelectable ? true : false} />
        <div className="displayClassesDescriptionContainer">
          
        {
            characterClass !== undefined ?
                <>
                
                    <h5>
                        {characterClass.className[0].toUpperCase() + characterClass.className.substring(1)} 
                    </h5>
                    <div>
                    <p>Stats Requeriments: STR: +<span id="requiredStat1">16</span> CHA: +<span id="requiredStat2">16</span></p>
            </div>
                    <p className="classLoreContainer">"  {characterClass.classLore} "</p>
                    <p>Class Skills</p>
                    <p className="divider"></p>
                    <ul className="classSkillsList">
                        {
                            characterClass.classSkills.map((skill) =>
                                <li key={skill}>{skill}</li>
                            )
                        }
                    </ul>
                </> 
                : <p className="noClassContent">
                    The dragon roared in triumph as Valeros collapsed into the snow, blood spurting from the terrible wound in his belly. Kyra rushed to his side, praying that she wasn't too late to save his life. “I'll hold the beast off!” Seoni cried as she stepped up to the dragon, her staff flaring with defensive fire. Merisiel looked to the hulking dragon, then at the delicate sorcerer, and shook her head sadly. The adventure had just barely begun, and judging by this fight alone, they weren't getting paid enough for the job.
                </p>
        }
        </div>
        </>
    )
}

export { ClassesSelector }

//Solve return to previous step funcionality. Context breaks it
//Solve the Img issues while returning to the previous stage (Selection, grayscale filter)
//Create a components to display available classes per gender
