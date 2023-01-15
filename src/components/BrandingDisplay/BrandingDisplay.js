import React from "react";
import "./BrandingDisplay.css"
import sound from "../../audio/mainMenu.mp3"

function BrandingDisplay( { setScreen, newPlaylist } ){
    const screenChange = (screen) => setScreen(screen)
    setTimeout(() => screenChange("MainMenuScreen"), 14000)

    // let soundtrack = new Audio(sound)
    // soundtrack.play()

    return(
    <section id="branding" className="branding fade-out">
        <div>
            <h3><span>Cosmic</span> Games</h3>
            <input 
                type="button" 
                className="continueButton" 
                value="Continue" 
                id="brandingButton"
                onClick={() => setScreen("MainMenuScreen")} 
                style={{display: "none"}} 
            />
        </div>
    </section>
    )
}

export { BrandingDisplay }