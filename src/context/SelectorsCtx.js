import React from "react"
import { useState, useEffect } from "react"
// import { playableClasses, playableRazes } from "../resources.js"

const SelectorsContext = React.createContext()

function SelectorsCtx({ children }) {

  const [ playableRazes, setRazes ] = useState([])
  const [ playableClasses, setClasses ] = useState([])

    const getGameData = (data) => {
      const razes = data[0].razes
      const classes = data[1].playableClasses
      
      setRazes(razes)
      setClasses(classes)
    }

    useEffect(() => {
      fetch("data.json")
        .then(response => response.json())
        .then(data => getGameData(data))
    }, [])


    /*States & Hooks*/
    const [screen, setScreen] = useState("StartScreen")

    const [savedCharacters, setSavedCharacters] = useState([])
    const [character, setCharacter] = useState("")
  
    const [selectionStage, setSelectionStage] = useState("razes")
  
    const [characterName, setCharacterName] = useState("")
  
    const[gender, setGender] = useState("male")
    const[raze, setRaze] = useState("")
  
    const[characterClass, setcharacterClass] = useState(undefined)
    const[isSelectable, setSelectable] = useState("")
  
    const [characterImg, setCharacterImg] = useState("https://i.imgur.com/aryfPBv.png")
  
    const [diceRolled, setDiceRolled] = useState(false)
    
    const [characterStats, setStats] = useState({})
    const [totalScores, setTotalScores] = useState({})
  
   
  
     const useSelectGender = () => {
      // Review logic. Miss functioning with the radio selectors checks.
       const genderFemaleSelector = document.getElementById("genderFemale")
       const genderMaleSelector = document.getElementById("genderMale")
  
       const applyMaleGender = ( gender )  => {
         setGender(gender)
         genderMaleSelector.checked= true
       }
  
       genderFemaleSelector.checked ? setGender("female") : applyMaleGender("male") 
  
     }
  
     const useSelectRaze = (e) => {
       setRaze(
         playableRazes.find( (pRaze) => 
           pRaze.razeName === e.target.id
         )
       )
       // Separate this logic
       if(characterName !== ""){
         const comfirmButton = document.getElementById("comfirmSelections")
         comfirmButton.disabled = false
         comfirmButton.addEventListener("click", () => setSelectionStage("classes"))
       }
     } 
  
     const useSelectClass = (e) => {
      console.log(e.target.id)
       setcharacterClass(
         playableClasses.find( (pClass) => 
           pClass.className === e.target.id
         )
       )
     // Separate this logic
       const comfirmButton = document.getElementById("comfirmClass")
      
       if(isSelectable === true){
         comfirmButton.disabled = false
         comfirmButton.addEventListener("click", () => setScreen("CharacterProfile"))
       }
     }
  
     useEffect(() => {
       /*Character Images Display */
       // Solve return to razes selection img issues and error catching
       try{
         if(!characterClass){
           setCharacterImg(gender === "male" ? raze.maleImg : raze.femaleImg)
         } else {
           if(raze.razeName === "human"){
               setCharacterImg(gender === "male" ? characterClass.classImages.human.male :
               characterClass.classImages.human.female)
             } else if(raze.razeName === "elf"){
               setCharacterImg(gender === "male" ? characterClass.classImages.elf.male :
               characterClass.classImages.elf.female)
             } else if (raze.razeName === "orc") {
               setCharacterImg(gender === "male" ? characterClass.classImages.orc.male :
               characterClass.classImages.orc.female)
             } else if (raze.razeName === "dwarf") {
               setCharacterImg(gender === "male" ? characterClass.classImages.dwarf.male : 
               characterClass.classImages.dwarf.female)
             }
         }
       } catch (error) {
         console.log(error)
         setCharacterImg(gender === "male" ? raze.razeImgMale : raze.razeImgFemale)
       }
     }, [gender, raze, characterClass])
  
     useEffect( () => {
       /*Class Requeriments Validation*/   
       if(characterClass !== undefined){
           let requisites = 0
       for (const [key, value] of Object.entries(totalScores)){
           for (const [classKey, classValue] of Object.entries(characterClass.classRequirements)){
               if(key === classKey) {
                   if(value > classValue) {
                       requisites++
                   }
               }   
           }
  
       if(requisites === 2) {
           setSelectable(true)
       } else {
           setSelectable(false)
       }
       }
     }
     }, [totalScores, characterClass])

  return(
    <SelectorsContext.Provider
      value={{
        screen,
        setScreen,

        savedCharacters,
        setSavedCharacters,

        playableRazes,
        playableClasses,

        character,
        setCharacter,

        selectionStage,
        setSelectionStage,

        characterName,
        setCharacterName,

        gender,
        setGender,

        raze,
        setRaze,

        characterClass,
        setcharacterClass,

        isSelectable,
        setSelectable,

        characterImg,
        setCharacterImg,

        diceRolled,
        setDiceRolled,

        characterStats,
        setStats,

        totalScores,
        setTotalScores,

        useSelectGender,
        useSelectRaze,
        useSelectClass
      }}
    >
      {children}
    </SelectorsContext.Provider>
  )
}

export { SelectorsCtx, SelectorsContext }