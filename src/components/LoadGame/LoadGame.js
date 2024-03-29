import React, { useContext } from "react";
import "./LoadGame.css"

import { StatsList } from "../StatsList/StatsList.js"
import { SelectorsContext } from "../../context/SelectorsCtx";

function LoadGame () {

  const  { character, savedCharacters, setCharacter, setScreen} = useContext(SelectorsContext)

  const useSelectCharacter = () => {
    let loadedCharacters = Array.from(document.getElementsByClassName("selectionBox"))
    let selectedCharacterBox = loadedCharacters.find((loadedCharacter) => 
      loadedCharacter.checked
    )
    let character = savedCharacters.find((savedcharacter) => savedcharacter.name === selectedCharacterBox.id)
     setCharacter(character)
  }

 	return(
    <section className="loadingGameScreen">
      <div className="titlesBar">
        <p>Select an Adventurer.</p>
        <h2>LOAD GAME</h2>
      </div>
      <div className="loadGameMenu">
        {
					<>
            { savedCharacters.length > 0 &&
              savedCharacters.map((character) =>
              <>
                <input type={"radio"} className="selectionBox" name="savedCharacters" id={character.name} onChange={useSelectCharacter}/>
                <label htmlFor={character.name}>
                  <div className="characterContainer">
                    <div className="characterThumbnails">
                      <div className="characterPicture">
                        <img 
													src={ character.characterProfileImg } 
													alt={character.playerId + character.name} 
												/>
                        <div 
                        	className="characterPictureSpanded" 
                          style={{backgroundImage: `url("${character.raze.razeBKImg}")`}}
                        >
                          <img src={character.img} alt={character.playerId + character.name} /> 
                      	</div> 
                    	</div>
                                        
                    	<div className="characterLogo">
                      	<img src={character.cClass.classIcon} alt="" />
                      	<div className="characterStatsSpanded">
                        	<StatsList characterStats={character.stats} raze={character.raze} />
                    		</div>
                    	</div>
                  	</div>
                  	<div className="characterDetails">
                    	<div className="characterInfo">
                      	<p>
                        	{character.gender}&nbsp;{character.raze.razeName}&nbsp;{character.cClass.className}
                      	</p>
                      	<p>Lv:&nbsp;{character.level}</p>
                      	<p>HP:&nbsp;{character.HP}</p>
                      	<p>ATK:&nbsp;{character.ATK}</p>
                     	  <p>DEF:&nbsp;{character.DEF}</p>
                    	</div>
                    	<div className="userDetails">
                    		<p>Player ID:</p>
                      	<p>{character.playerId}</p>
                     	  <p>Date:</p>
                      	<p>Time:</p>
                     		<p className="dateTime">{character.savedTimestamp}</p>
                    	</div>
                    	<div className="infoBar">
                      	<h4>{character.name}</h4>
                    	</div>   
                  	</div>
                	</div>
                </label>
              </> 
            )}
            <div className="emptyCharacterContainer"></div>
					</>
        }
      </div>
      <input type="button" className="returnButton returnMainMenu" value="Return" onClick={() => setScreen("MainMenuScreen")} />
      <div className="buttonContainer">
        <input type="button" className="continueButton" value="Continue" id="continueLoadGame" onClick={() => setScreen("LoadedCharacterScreen")} disabled={character !== "" ?  false : true } />
      </div>
    </section>
  )
}

export { LoadGame }

//Apply changes after implement useReducer format to screen's changes logic.
//Add delete character and delete all funcionality