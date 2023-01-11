import React from "react";
import "./LoadGame.css"

import { StatsList } from "../StatsList/StatsList.js"

function LoadGame ( { savedCharacters, setCharacter, setScreen} ) {

    const useSelectCharacter = () => {
        let loadedCharacters = Array.from(document.getElementsByClassName("selectionBox"))
        let selectedCharacterBox = loadedCharacters.find((loadedCharacter) => 
            loadedCharacter.checked
        )
        let character = savedCharacters.find((savedcharacter) => savedcharacter.characterName === selectedCharacterBox.id)
        setCharacter(character)
    }

    return(
        <section className="loadingGameScreen">
            <div className="LoadingGameSection">
                <h2>Load Game</h2>
                <div className="loadGameMenu">
            
            {
                savedCharacters.map((character) =>
                <>
                    <div>
                        <input type={"radio"} className="selectionBox" name="savedCharacters" id={character.characterName} onChange={useSelectCharacter}/>
                    </div>
                    <label htmlFor={character.characterName}>
                        <div className="characterContainer">
                            <div className="characterThumbnail">
                                <h4>{character.characterName}</h4>
                                <img src={character.characterImg} alt={character.playerId + character.name} />
                            </div>
                            <div className="userDetails">
                                <p>Player ID:&nbsp;{character.playerId}</p>
                                <p>Created:&nbsp;{character.savedTimestamp}</p>
                            </div>
                            <div className="statsList">
                                <StatsList  characterStats={character.stats} raze={character.raze} />
                            </div>
                            
                            <div className="characterDescription">
                                <p>{character.raze.razeLore}</p>
                            </div>
                            <div className="characterLogo">
                                <img src={character.characterClass.classIcon} alt="" ></img>
                            </div>
                        </div>
                    </label>
                </> 
                )
            }
            </div>
            <input type="button" className="returnButton returnMainMenu" value="Return" onClick={() => setScreen("MainMenuScreen")} />
                <input type="button" className="continueButton" value="Continue" id="continueLoadGame" onClick={() => setScreen("LoadedCharacterScreen")}/>
            </div>
        </section>
    )
}

export { LoadGame }