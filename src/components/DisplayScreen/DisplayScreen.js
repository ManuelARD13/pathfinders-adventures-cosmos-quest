import React, { useContext } from "react";
import { SelectorsContext } from "../../context/SelectorsCtx";

import "./DisplayScreen.css"

import { CharacterImgDisplay } from "../CharacterImgDisplay/CharacterImgDisplay";
import { RazesSelector } from "../RazesSelector.js/RazesSelectors";
import { ClassesSelector } from "../ClassesSelector/ClassesSelector";


function DisplayScreen(){

  const { raze, selectionStage } = useContext(SelectorsContext)
 
  return(
      <section 
        className="displayScreen" 
        style = { selectionStage === "razes" 
          ? { backgroundImage: "url('https://i.imgur.com/svtJbZs.jpg')" }
          : { backgroundImage: `url(${raze.razeBKImg})` }
      }>
          <h2>Create Your Character</h2>
            { selectionStage === "razes" 
              ? <RazesSelector />
              : <ClassesSelector />
            }

              {/* TODO: Add CharacterProfile screen */}

          <CharacterImgDisplay />
               
      </section>
    )
}

export { DisplayScreen }