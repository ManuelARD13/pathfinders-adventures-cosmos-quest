import React from "react";

function StartScreen ( { setScreen, setSavedCharacters}) {
    const localStorageCharacters = localStorage.getItem("savedCharacters_V1")

    const initializeLocalStorage = () => {
        if(!localStorageCharacters){
            localStorage.setItem("savedCharacters_V1", "[]")
            setSavedCharacters([])
        } else {
            let savedCharacters = JSON.parse(localStorageCharacters)
            setSavedCharacters(savedCharacters)
        }
        setScreen("BrandingScreen")
    }

    return(
        <section id="startScreen">
            <img src={require("../../img/diceGoblin.png")} alt="diceGoblin" />
            <input 
                type="button" 
                className="continueButton" 
                value="START DEMO APP TRIAL" 
                id="startScreenButton"
                onClick={initializeLocalStorage}  />
        </section>
    )
}

export { StartScreen }