import React from "react";
import "./BrandingDisplay.css"

function BrandingDisplay( { setScreen } ){
    
    /*Animated Transition Parameters*/
    const screenChange = (screen) => setScreen(screen)
    setTimeout(() => screenChange("MainMenuScreen"), 14000)

    return(
    <section id="branding" className="branding fade-out">
        <div>
            <h3><span>Cosmic</span> Games</h3>
        </div>
    </section>
    )
}

export { BrandingDisplay }