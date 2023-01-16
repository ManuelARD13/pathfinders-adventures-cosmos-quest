import React from "react";

function CharacterImgDisplay( { characterImg, isSelectable }) {
  
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