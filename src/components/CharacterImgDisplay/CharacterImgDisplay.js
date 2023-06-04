import React, { useContext } from "react";
import { SelectorsContext } from "../../context/SelectorsCtx";

function CharacterImgDisplay() {

  const { characterImg, isSelectable } = useContext(SelectorsContext)
  
  return(
  	<div className="displayImgContainer">
      <img 
        src={!characterImg ? "https://i.imgur.com/aryfPBv.png" : characterImg} 
        alt="Your Character"
        style={isSelectable === false ? {filter: "grayscale(100%)"} : {}}
      />
    </div>
  )
}

export { CharacterImgDisplay } 