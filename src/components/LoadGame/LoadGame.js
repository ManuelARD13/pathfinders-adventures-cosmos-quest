import React from "react";
import "./LoadGame.css"

function LoadGame ( {savedCharacters, setCharacter, setScreen} ) {

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
                            <input type={"radio"} className="selectionBox" name="savedCharacters" id={character.characterName} onChange={useSelectCharacter}/>
                            <label htmlFor={character.characterName}>
                            <div className="characterContainer">
                                    <div className="characterThumbnail">
                                        <h4>{character.characterName}</h4>
                                        <img src={character.characterImg} alt={character.playerId + character.name} />
                                    </div>
                                    <div className="statsList">
                                        <ul >
                                            <li key="CON">CON: {character.stats.CON}</li>
                                            <li key="STR">STR: {character.stats.STR}</li>
                                            <li key="DEX">DEX: {character.stats.DEX}</li>
                                            <li key="INT">INT: {character.stats.INT}</li>
                                            <li key="WIS">WIS: {character.stats.WIS}</li>
                                            <li key="CHA">CHA: {character.stats.CHA}</li>
                                        </ul>
                                    </div>
                                    <div className="characterDescription">
                                        <p>{character.raze.razeLore}</p>
                                    </div>
                                </div>
                            </label> 
                        </>)
                    }
                </div>
                <div className="loadButtons">
                    <input type="button" className="returnButton returnMainMenu" value="Return" onClick={() => setScreen("MainMenuScreen")} />
                    <input type="button" className="continueButton" value="Continue" id="continueLoadGame" onClick={() => setScreen("LoadedCharacterScreen")}/>
                </div>
            </div>
        </section>
    )
}

export { LoadGame }