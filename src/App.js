import './App.css';
import { playableClasses, playableRazes, playlist } from "./resources.js"
import { useState } from "react";

import { DisplayScreen } from './components/DisplayScreen/DisplayScreen';

function App() {

  const[gender, setGender] = useState("male")
  const[raze, setRaze] = useState({})

  const useSelectRaze = (e) => {
    setRaze(
      playableRazes.find( (pRaze) => 
        pRaze.razeName === e.target.id
      )
      
    )
    console.log(raze)
  } 

  const useSelectGender = () => {
    const genderSelector = document.getElementById("genderFemale")
    genderSelector.checked ? setGender("female") : setGender("male")
    console.log(gender)
  }

  return (
    <>
      <DisplayScreen
       playableRazes={playableRazes} 
       gender={gender} 
       useSelectGender={useSelectGender}
       
       raze={raze}
       useSelectRaze={useSelectRaze}/>
    </>
  );
}

export { App }
