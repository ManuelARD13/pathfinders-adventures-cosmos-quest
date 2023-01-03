import React from "react";

function StartScreen ( { setScreen }) {
    return(
        <section id="startScreen">
            <img src={require("../../img/diceGoblin.png")} alt="diceGoblin" />
            <input 
                type="button" 
                className="continueButton" 
                value="START DEMO APP TRIAL" 
                id="startScreenButton"
                onClick={() => setScreen("BrandingScreen")}  />
        </section>
    )
}

export { StartScreen }