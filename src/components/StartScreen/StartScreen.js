import React from "react";
import "./StartScreen.css"

function StartScreen ( { setScreen, setSavedCharacters}) {
    const localStorageCharacters = localStorage.getItem("savedCharacters_V1")
    const fullPage = document.documentElement

    const initializeLocalStorage = () => {
        if(!localStorageCharacters){
            localStorage.setItem("savedCharacters_V1", "[]")
            setSavedCharacters([])
        } else {
            let savedCharacters = JSON.parse(localStorageCharacters)
            setSavedCharacters(savedCharacters)
        }
        fullPage.requestFullscreen()
        setScreen("BrandingScreen")
    }

    return(
        <section className="startScreen">
            <div className="imageContainer">
                <img src={require("../../img/diceGoblin.png")} alt="diceGoblin" />
            </div>
            <div className="startMessage">
                <p>Click below to test this Demo App. <br/> Allow sound and set fullscreen for a better experience. <br/>Thank you and good game!</p>
                <p>This app works with React.js Library and Object-Oriented programming concepts, Arrays manipulation, localStorage, and APIs usage on Javascript. CSS3 for styling and FramerMotion React Library for animations. Hosted and deployed on Github Pages.</p>
                <input 
                    type="button" 
                    className="continueButton" 
                    value="START DEMO APP TRIAL" 
                    id="startScreenButton"
                    onClick={initializeLocalStorage}  />
            </div>
        </section>
    )
}

export { StartScreen }