import './App.css';
import { playableClasses, playableRazes, playlist } from "./resources.js"
import { useState, useEffect } from "react";

import { DisplayScreen } from './components/DisplayScreen/DisplayScreen';
import { StartScreen } from './components/StartScreen/StartScreen';
import { BrandingDisplay } from './components/BrandingDisplay/BrandingDisplay';
import { MainMenu } from './components/MainMenu/MainMenu';

function App() {

  /*Functions*/

  const createPlayerId = () => {
    let num = "00" + Math.floor(Math.random() * 100)
    return num
  }

  /*States & Hooks*/
  const [screen, setScreen] = useState("StartScreen")
  const [selectionStage, setSelectionStage] = useState("razes")

  const[gender, setGender] = useState("male")
  const[raze, setRaze] = useState({})

  const[characterClass, setcharacterClass] = useState(undefined)

  const [characterImg, setCharacterImg] = useState("https://i.imgur.com/aryfPBv.png")

  useEffect(() => {
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
  }, [gender, raze, characterClass])

  // const useSetImg = () => {
  //   if(characterClass === {}) {
  //     if(raze === {}){
  //       setCharacterImg("")
  //     } else {
  //       gender === "male" ? setCharacterImg(raze.razeImgMale) : setCharacterImg(raze.razeImgFemale) 
  //     }
  //   } else {
  //     if(raze.razeName === "human"){
  //       setCharacterImg(gender === "male" ? characterClass.classImg.human.male :
  //       characterClass.classImg.human.female)
  //     } else if(raze.razeName === "elf"){
  //       setCharacterImg(gender === "male" ? characterClass.classImg.elf.male :
  //       characterClass.classImg.elf.female)
  //     } else if (raze.razeName === "orc") {
  //       setCharacterImg(gender === "male" ? characterClass.classImg.orc.male :
  //       characterClass.classImg.orc.female)
  //     } else if (raze.razeName === "dwarf") {
  //       setCharacterImg(gender === "male" ? characterClass.classImg.dwarf.male : 
  //       characterClass.classImg.dwarf.female)
  //     }
  //   }}

  const useSelectGender = () => {
    const genderSelector = document.getElementById("genderFemale")
    genderSelector.checked ? setGender("female") : setGender("male")
  }

  const useSelectRaze = (e) => {
    setRaze(
      playableRazes.find( (pRaze) => 
        pRaze.razeName === e.target.id
      )
    )
  } 

  const useSelectClass = (e) => {
    setcharacterClass(
      playableClasses.find( (pClass) => 
        pClass.className === e.target.id
      )
    )
  }

  /*Renderization*/
  return (
    <>
      {screen !== "StartScreen" ?  null : <StartScreen setScreen={setScreen} />}
      {screen === "BrandingScreen" ? <BrandingDisplay setScreen={setScreen} /> : null}
      {screen === "MainMenuScreen" ? <MainMenu  setScreen={setScreen} /> : null}


      {screen === "CreateCharacterScreen" ?

        <DisplayScreen
        selectionStage={selectionStage}
        setSelectionStage={setSelectionStage}

        playableRazes={playableRazes} 
        gender={gender} 
        useSelectGender={useSelectGender}
        
        raze={raze}
        useSelectRaze={useSelectRaze}

        characterClass={characterClass}
        useSelectClass={useSelectClass}

        characterImg={characterImg}
        useEffect={useEffect}
        
        useScreenChange={setScreen} />

       : null}
    </>
  );
}

export { App }
