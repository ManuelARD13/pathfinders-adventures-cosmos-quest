import React from "react";

import { CharacterImgDisplay } from "../CharacterImgDisplay/CharacterImgDisplay";
import { RazesSelector } from "../RazesSelector.js/RazesSelectors";
import { ClassesSelector } from "../ClassesSelector/ClassesSelector";

import "./DisplayScreen.css"

function DisplayScreen({ setScreen, selectionStage, setSelectionStage, characterStats, setCharacterName, gender, useSelectGender, playableRazes, raze, useSelectRaze, characterClass, useSelectClass, setCharacterClass, characterImg}){
 
  return(
      <section 
        className="displayScreen" 
        style= {
          selectionStage === "razes" 
          ? {
              backgroundImage: "url('https://i.imgur.com/svtJbZs.jpg')"
            }
          : {
              backgroundImage: `url(${raze.razeBKImg})`
            }
        }>
          <h2>Create Your Character</h2>
          {selectionStage === "razes" 
          ? 
            <RazesSelector
            setSelectionStage={setSelectionStage}
            characterStats={characterStats}
            setCharacterName={setCharacterName}
            gender={gender}
            raze={raze}
            useSelectGender={useSelectGender}
            useSelectRaze={useSelectRaze}
            playableRazes={playableRazes} 

            />
          : <ClassesSelector 
            setSelectionStage={setSelectionStage}
            gender={gender}
            raze={raze}
            characterStats={characterStats}
            characterClass={characterClass}
            useSelectClass={useSelectClass}
            setCharacterClass={setCharacterClass}
            setScreen={setScreen}
     
            />
          }
          <CharacterImgDisplay characterImg={characterImg} />     
      </section>
    )
}

export { DisplayScreen }