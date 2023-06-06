import React, { useContext } from 'react';
import { SelectorsContext } from '../../context/SelectorsCtx';

import './AppUI.css';

import { DisplayScreen } from '../DisplayScreen/DisplayScreen';
import { StartScreen } from '../StartScreen/StartScreen';
import { BrandingDisplay } from '../BrandingDisplay/BrandingDisplay';
import { MainMenu } from '../MainMenu/MainMenu';
import { DiceRoll } from '../DiceRoll/DiceRoll';
import { CharacterProfile } from '../CharacterProfile/CharacterProfile';
import { Acknoledgements } from '../Acknoledgements/Acknoledgements';
import { LoadGame } from '../LoadGame/LoadGame';
import { LoadedCharacterProfile } from '../LoadedCharacterProfile/LoadedCharacterProfile';
import { SoundPlayer } from '../SoundPlayer/SoundPlayer';


function AppUI() {

  const { screen } = useContext(SelectorsContext)

  /*Rendering*/
  return (
    <>
      {screen !== "StartScreen" ?<SoundPlayer /> : null }
      {screen !== "StartScreen" ?  null : <StartScreen />}
     
      {screen === "BrandingScreen" ? <BrandingDisplay /> : null}

      {screen === "MainMenuScreen" ? <MainMenu /> : null}

      {screen === "DiceRoll" ? <DiceRoll /> : null} 

      {screen === "LoadGameScreen" ? <LoadGame /> : null}

      {screen === "LoadedCharacterScreen" ? <LoadedCharacterProfile /> : null}

      {screen === "CreateCharacterScreen" ? <DisplayScreen /> : null}
    
      {screen === "CharacterProfile" ? <CharacterProfile /> : null }

      {screen === "Acknoledgements" ? <Acknoledgements /> : null}
    </> 
  );
}

export { AppUI }

// Apply useReducer on Screen's states
//Separate hooks into their own files.