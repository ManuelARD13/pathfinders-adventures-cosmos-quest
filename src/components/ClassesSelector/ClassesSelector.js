import React, { useEffect, useState } from "react";
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
    isSelectable,
    setSelectable
  } = useContext(SelectorsContext)

  const [classRequirements, setClassRequirements] = useState(false)

  /*Creating totalScores Object for classRequirements comparisons*/
  const totalScores = {}

  for (const [key, value] of Object.entries(characterStats)) {
    for (const [modKey, modValue] of Object.entries(raze.razeModifiers)) {
      if (modKey === key && modValue !== 0) {
        totalScores[`${key}`] = value + modValue
      } else if (modKey === key && modValue === 0) {
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

  useEffect(() => {
    if (!!characterClass) {
      const classRequisites = Object.entries(characterClass.classRequirements)
      setClassRequirements(classRequisites)
    }
  }, [characterClass])





  return (
    <>
      <input type={"button"} value="Return" className="returnButton"
        onClick={() => {
          setSelectionStage("razes")
          setCharacterClass(undefined)
          setSelectable(true)
        }} />

      <div className="displayClassesSelectorsContainer">

        <p>Choose your class</p>
        <p className="divider"></p>

        {isSelectable
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
          {getAvailableClasses(raze, gender).map((pClass) =>
            <ClassIcon totalScores={totalScores} pClass={pClass} key={pClass.className}/>
          )}
        </form>

      </div>
      <input type="button" className="continueButton" value="Comfirm Selections" id="comfirmClass"
        disabled={!isSelectable ? true : false} />
      <div className="displayClassesDescriptionContainer">

        {
          characterClass !== undefined ?
            <>

              <h5>
                {characterClass.className[0].toUpperCase() + characterClass.className.substring(1)}
              </h5>
              <div>
                {!!classRequirements ?
                  <p style={isSelectable ? { color: "rgb(0, 255, 76)" } : { color: "red" }}>
                    Stats Requirements: +
                    <span id="requiredStat1">
                      {`${classRequirements[0][0]}: ${classRequirements[0][1]}`}
                    </span> +
                    <span id="requiredStat2">
                      {`${classRequirements[1][0]}: ${classRequirements[1][1]}`}
                    </span>
                  </p>
                  : null
                }
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
