import React from "react";

function MainMenu( { setScreen } ) {
    return(
        <section id="mainMenu">
        <div id="mainMenuDiv">
            <img src={require("../../img/pathfinderLogo.png")} alt="pathfinderLogo" />
            <h1 id="mainMenuSubtitle">Cosmo's Quest</h1>
            <form id="mainMenuForm">
                <input 
                    type="button" 
                    value="New Game" 
                    onClick={() => setScreen("DiceRoll")}  
                />
                <input 
                    type="button" 
                    value="Load Game" 
                    onClick={() => setScreen("LoadGameScreen")} />
            </form>
        </div>
    </section>
    )
}

export { MainMenu }