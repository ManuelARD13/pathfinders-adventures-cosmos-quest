import React from "react";

import mainMenuTrack  from "../../audio/mainMenu.mp3"
import  tavernTrack  from "../../audio/tavern.mp3"
import humanTrack from "../../audio/human.mp3"
import elfTrack from "../../audio/elf.mp3"
import orcTrack from "../../audio/orc.mp3"
import dwarfTrack from "../../audio/dwarf.mp3"


function SoundPlayer ( { screen, selectionStage, raze } ) {

  const applyRazeBKMusic = () => {
  	if(raze.razeName === "human"){
      return(humanTrack)
    } else if(raze.razeName === "elf"){
      return(elfTrack)
    } else if(raze.razeName === "orc"){
      return(orcTrack)
    }  else if(raze.razeName === "dwarf"){
      return(dwarfTrack)
    }
  }

  return(
    <>
      { screen !== "DiceRoll" &&
        screen !== "CreateCharacterScreen" && 
        /*TODO: Modify after integrate CharacterProfile screen to DisplayScreen */
        screen !== "CharacterProfile" ? <audio src={mainMenuTrack} autoPlay loop /> 
            
        : null 
      }
      { screen === "DiceRoll" || 
				(screen === "CreateCharacterScreen" && selectionStage === "razes") ? <audio src={tavernTrack} autoPlay loop /> 
			
				: null 
			}
      { selectionStage === "classes" && screen !== "Acknoledgements" ? <audio src={applyRazeBKMusic()} autoPlay loop /> : null }
    </>
  )
}

export { SoundPlayer }

//Test issues after apply useReducer format to screen's changes