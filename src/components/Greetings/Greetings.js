import React from "react";

function Greetings () {
    return(
        <section>
            <h2>Thank You!</h2>
            <p>
                Your Adventurer has been created and saved on your divice.<br />
                When you coming back, press Load Game in the main menu to select an Adventurer from those awaiting in your tavern ready to battle!
            </p>
            <div>
                <img src={require("../../img/diceGoblin.png")} alt="Dice Goblin" />
            </div>
            <div>
                <p> 
                    You can see all the work behind this DEMO App on my <a href="https://github.com/ManuelARD13/pathfinders-adventures-cosmos-quest">Github Repository</a>
                </p>
            </div>
            <p>Thank you so much for testing this App. Hope you like it! <br/>
            Have a good day! or, perhaps, a good night!</p>
            <a href="http://localhost:3000/"><input type={"button"} value="End Game"/></a>
        </section>
    )
}

export { Greetings }