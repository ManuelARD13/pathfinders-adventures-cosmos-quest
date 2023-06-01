import React from "react";

import { CharacterImgDisplay } from "../CharacterImgDisplay/CharacterImgDisplay";
import { RazesSelector } from "../RazesSelector.js/RazesSelectors";
import { ClassesSelector } from "../ClassesSelector/ClassesSelector";

import "./DisplayScreen.css"

function DisplayScreen({ setScreen, selectionStage, setSelectionStage, characterStats, setTotalScores, setCharacterName, gender, useSelectGender, playableRazes, raze, useSelectRaze, characterClass, useSelectClass, setCharacterClass, isSelectable, characterImg}){
 
  return(
      <section 
        className="displayScreen" 
        style = { selectionStage === "razes" 
          ? {
              backgroundImage: "url('https://i.imgur.com/svtJbZs.jpg')"
            }
          : {
              backgroundImage: `url(${raze.razeBKImg})`
            }
      }>
          <h2>Create Your Character</h2>
            { selectionStage === "razes" 
              ? <RazesSelector
                  setSelectionStage={setSelectionStage}
                  characterStats={characterStats}

                  setCharacterName={setCharacterName}

                  gender={gender}
                  useSelectGender={useSelectGender}

                  raze={raze}
                  useSelectRaze={useSelectRaze}
                  playableRazes={playableRazes} 
      
                />
              : <ClassesSelector 
                  setSelectionStage={setSelectionStage}

                  characterStats={characterStats}
                  setTotalScores={setTotalScores}

                  gender={gender}

                  raze={raze}
                  
                  characterClass={characterClass}
                  useSelectClass={useSelectClass}
                  setCharacterClass={setCharacterClass}
                  isSelectable={isSelectable}

                  setScreen={setScreen}
                />
              }

              {/* TODO: Add CharacterProfile screen */}

          <CharacterImgDisplay characterImg={characterImg} isSelectable={isSelectable} />
               
      </section>
    )
}

export { DisplayScreen }

//Apply React Context to solve prop drilling issues.