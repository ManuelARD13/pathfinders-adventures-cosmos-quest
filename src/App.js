import './App.css';
import { playableClasses, playableRazes, playlist } from "./resources.js"
import { React } from 'react';
import { useState, useEffect } from "react";

import { DisplayScreen } from './components/DisplayScreen/DisplayScreen';
import { StartScreen } from './components/StartScreen/StartScreen';
import { BrandingDisplay } from './components/BrandingDisplay/BrandingDisplay';
import { MainMenu } from './components/MainMenu/MainMenu';
import { DiceRoll } from './components/DiceRoll/DiceRoll';
import { CharacterProfile } from './components/CharacterProfile/CharacterProfile';
import { Greetings } from './components/Greetings/Greetings';
import { LoadGame } from './components/LoadGame/LoadGame';
import { LoadedCharacterProfile } from './components/LoadedCharacterProfile/LoadedCharacterProfile';

function App() {

  /*Functions*/

  

  /*States & Hooks*/
  const [screen, setScreen] = useState("StartScreen")

  const [savedCharacters, setSavedCharacters] = useState([])
  const [character, setCharacter] = useState("")

  const [selectionStage, setSelectionStage] = useState("razes")

  const [characterName, setCharacterName] = useState("")

  const[gender, setGender] = useState("male")
  const[raze, setRaze] = useState("")

  const[characterClass, setcharacterClass] = useState(undefined)

  const [characterImg, setCharacterImg] = useState("https://i.imgur.com/aryfPBv.png")

  const [diceRolled, setDiceRolled] = useState(false)
  
  const [characterStats, setStats] = useState({})

  const useSelectGender = () => {
    const genderFemaleSelector = document.getElementById("genderFemale")
    const genderMaleSelector = document.getElementById("genderMale")

    const applyGender = ( gender )  => {
      setGender(gender)
      genderMaleSelector.checked= true
    }

    genderFemaleSelector.checked ? setGender("female") : applyGender("male") 

  }

  const useSelectRaze = (e) => {
    setRaze(
      playableRazes.find( (pRaze) => 
        pRaze.razeName === e.target.id
      )
    )
    if(characterName !== ""){
      const comfirmButton = document.getElementById("comfirmSelections")
      comfirmButton.disabled = false
      comfirmButton.addEventListener("click", () => setSelectionStage("classes"))
    }
  } 

  const useSelectClass = (e) => {
    setcharacterClass(
      playableClasses.find( (pClass) => 
        pClass.className === e.target.id
      )
    )
    const comfirmButton = document.getElementById("comfirmClass")
    comfirmButton.disabled = false
    comfirmButton.addEventListener("click", () => setScreen("CharacterProfile"))
  }

  useEffect(() => {
    try{
      if(!characterClass){
        setCharacterImg(gender === "male" ? raze.razeImgMale : raze.razeImgFemale)
      } else {
        if(raze.razeName === "human"){
            setCharacterImg(gender === "male" ? characterClass.classImg.human.male :
            characterClass.classImg.human.female)
          } else if(raze.razeName === "elf"){
            setCharacterImg(gender === "male" ? characterClass.classImg.elf.male :
            characterClass.classImg.elf.female)
          } else if (raze.razeName === "orc") {
            setCharacterImg(gender === "male" ? characterClass.classImg.orc.male :
            characterClass.classImg.orc.female)
          } else if (raze.razeName === "dwarf") {
            setCharacterImg(gender === "male" ? characterClass.classImg.dwarf.male : 
            characterClass.classImg.dwarf.female)
          }
      }
    } catch (error) {
      console.log(error)
      setCharacterImg(gender === "male" ? raze.razeImgMale : raze.razeImgFemale)
    }
  }, [gender, raze, characterClass])


  /*Renderization*/
  return (
    <>
      {screen !== "StartScreen" ?  null : <StartScreen setScreen={setScreen} setSavedCharacters={setSavedCharacters}/>}
      {screen === "BrandingScreen" ? <BrandingDisplay setScreen={setScreen} /> : null}
      {screen === "MainMenuScreen" ? <MainMenu  setScreen={setScreen} /> : null}

      {screen === "DiceRoll" ? 

        <DiceRoll 
          diceRolled={diceRolled} 
          setDiceRolled={setDiceRolled}
  
          characterStats={characterStats}
          setStats={setStats}

          setScreen={setScreen} 
        />
      : null} 

      { screen === "LoadGameScreen" ? 
      
        <LoadGame 
          character={character}

          savedCharacters={savedCharacters} 

          setCharacter={setCharacter}
          
          setScreen={setScreen} /> 
        : null}

      { screen === "LoadedCharacterScreen" ? 
        <LoadedCharacterProfile character={character} setScreen={setScreen} /> 
      : null}

      {screen === "CreateCharacterScreen" ?

        <DisplayScreen
          selectionStage={selectionStage}
          setSelectionStage={setSelectionStage}

          characterStats={characterStats}
          
          characterName={characterName}
          setCharacterName={setCharacterName}

          gender={gender} 
          useSelectGender={useSelectGender}

          playableRazes={playableRazes}
          raze={raze}
          useSelectRaze={useSelectRaze}

          characterClass={characterClass}
          setCharacterClass={setCharacterImg}
          useSelectClass={useSelectClass}

          characterImg={characterImg}
          setCharacterImg={setCharacterImg}
          
          setScreen={setScreen} 
        />
        : null}
    
        { screen === "CharacterProfile" ? 
        
          <CharacterProfile
            character= {character}
            setCharacter={setCharacter} 
            characterName={characterName}
            gender={gender} 
            raze={raze} 
            characterClass={characterClass}
            characterImg={characterImg}
            characterStats={characterStats}
            setScreen={setScreen}
            savedCharacters={savedCharacters} 
          /> 
          : null }

          { screen === "Greetings" ? <Greetings /> : null}
    </> 
  );
}

export { App }
