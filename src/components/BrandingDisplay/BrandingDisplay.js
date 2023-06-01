import React from "react";
import "./BrandingDisplay.css"

function BrandingDisplay( { setScreen } ){
    
    /*Animated Transition*/
    setTimeout(() => setScreen("MainMenuScreen"), 14000)

    return(
    <section className="branding fade-out">
        <div>
            <h3><span>Cosmic</span> Games</h3>
        </div>
    </section>
    )
}

export { BrandingDisplay }

//Refactor screen's states into a useReducer format.