import React from "react";

function LoadGame ( {savedCharacters, setCharacter, setScreen} ) {

    const useSelectCharacter = () => {
        let loadedCharacters = Array.from(document.getElementsByClassName("selectionBox"))
        let selectedCharacterBox = loadedCharacters.find((loadedCharacter) => 
            loadedCharacter.checked
        )
        let character = savedCharacters.find((savedcharacter) => savedcharacter.characterName === selectedCharacterBox.id)
        console.log(character)
        setCharacter(character)
    }

    return(
        <section id="loadingGameScreen">
            <div>
                <p>Load Game</p>
                <input type="button" className="returnButton returnMainMenu" value="Return" onClick={() => setScreen("MainMenuScreen")} />
                <input type="button" className="continueButton" value="Continue" id="continueLoadGame" onClick={() => setScreen("LoadedCharacterScreen")}/>
            </div>
            {
                savedCharacters.map((character) =>
                <>
                    <div className="characterThumbnail">
                        <h4>{character.characterName}</h4>
                        <img src={character.characterImg} alt={character.playerId + character.name} />
                    </div>
                    <div>
                        <ul>
                            <li key="CON">CON: {character.stats.CON}</li>
                            <li key="STR">STR: {character.stats.STR}</li>
                            <li key="DEX">DEX: {character.stats.DEX}</li>
                            <li key="INT">INT: {character.stats.INT}</li>
                            <li key="WIS">WIS: {character.stats.WIS}</li>
                            <li key="CHA">CHA: {character.stats.CHA}</li>
                        </ul>
                    </div>
                    <div>
                        <p>{character.raze.razeLore}</p>
                    </div>
                    <div>
                        <input type={"radio"} className="selectionBox" name="savedCharacters" id={character.characterName} onChange={useSelectCharacter}/>
                    </div>
                </> 
                )
            }
        </section>
    )
}

export { LoadGame }