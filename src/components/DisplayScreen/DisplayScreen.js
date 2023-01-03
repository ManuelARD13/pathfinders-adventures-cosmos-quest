import React from "react";

import { CharacterImgDisplay } from "../CharacterImgDisplay/CharacterImgDisplay";
import { RazesSelector } from "../RazesSelector.js/RazesSelectors";
import { ClassesSelector } from "../ClassesSelector/ClassesSelector";

import "./DisplayScreen.css"

function DisplayScreen({ setScreen, selectionStage, setSelectionStage, playableRazes, gender, useSelectGender, raze, useSelectRaze, characterClass, useSelectClass, setCharacterClass, characterImg}){

  return(
      <section>
          <h2>Create Your Character</h2>
          {selectionStage === "razes" 
          ? 
            <RazesSelector
            setSelectionStage={setSelectionStage}
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