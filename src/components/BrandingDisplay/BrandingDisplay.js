import React from "react";
import "./BrandingDisplay.css"

function BrandingDisplay( { setScreen } ){
    const screenChange = (screen) => setScreen(screen)
    setTimeout(() => screenChange("MainMenuScreen"), 14000)
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