import React, { useEffect } from "react";

function DiceRoll( {diceRolled, setDiceRolled, reRolledCount, setReRolledCount, setScreen } ){

    const reRollMessage = document.getElementById("reRollMessage")
    const statsScores = Array.from(document.getElementsByClassName("statsScores"))
    const reRollButtons = Array.from(document.getElementsByClassName("reRollButtons"))
    let diceRolls = {}

    const statCalculator = () => Math.floor(Math.random()* 14) + 7 

    const diceRoll = () => {
        setDiceRolled(true)
    }

    useEffect (() => {
        statsScores.forEach((stat) => {
            let statScore = statCalculator()
            stat.innerHTML = statScore
            diceRolls[stat.id] = statScore
        })
    }, [diceRolled])
    
    const reRollStatDice = (e) => {
        if(reRolledCount > 0){
           let stat = e.target.id
            let statScore = document.getElementById(stat + "Score")
            let reRollScore = statCalculator()
            statScore.innerHTML = reRollScore
    
            if(stat === "CON"){
                diceRolls.CONScore = reRollScore
            } else if(stat === "STR"){
                diceRolls.STRScore = reRollScore
            } else if(stat === "DEX"){
                diceRolls.DEXScore = reRollScore 
            } else if(stat === "INT"){
                diceRolls.INTScore = reRollScore
            } else if(stat === "WIS"){
                diceRolls.WISScore = reRollScore
            } else if(stat === "CHA"){
                diceRolls.CHAScore = reRollScore
            }
    
            setReRolledCount(reRolledCount--)
            updateReRolls() 
        } 
    }

    const updateReRolls = () => {
        if(reRolledCount === 0){
            reRollMessage.innerHTML = "You have roll all your Re-Roll chances. Excellent! this are great stats to begin your epic journey. Congrats!"
            reRollButtons.forEach((button) => {
                button.disabled = true
            })
        }
    }

    return(
        <section>
            <div id="diceRollTableContainer">
                <p>createCharacter3</p>
                {diceRolled ? <p id="reRollMessage">Great! Yet you have <span id="reRollDisplay">{reRolledCount}</span> chances to re-roll <br/>
                    one of the stat's score you have get. Good Luck!<br/></p> : null}
                <h4>Roll your dices</h4>
                <table id="statsTable">
                    <tbody>    
                        <tr>
                            <th>Stats</th>
                            <th>Score</th>
                            <th>Modif.</th>
                        </tr>
                        <tr>
                            <td> CON</td>
                            <td><span id="CONScore" className="statsScores">0</span></td>
                            <td><span id="CONModif">+0</span></td>
                            {diceRolled ? <td><input type="button" value="Re-Roll!" className="reRollButtons" id="CON" onClick={reRollStatDice} /></td> : null}
                        </tr>
                        <tr>
                            <td>STR</td>
                            <td><span id="STRScore" className="statsScores">0</span></td>
                            <td><span id="STRModif">+0</span></td>
                            {diceRolled ? <td><input type="button" value="Re-Roll!" className="reRollButtons" id="STR" onClick={reRollStatDice} /></td> : null }
                        </tr>
                        <tr>
                            <td>DEX</td>
                            <td><span id="DEXScore" className="statsScores">0</span></td>
                            <td><span id="DEXModif">+0</span></td>
                            {diceRolled ? <td><input type="button" value="Re-Roll!" className="reRollButtons" id="DEX" onClick={reRollStatDice} /></td> : null }
                        </tr>
                        <tr>
                            <td>INT</td>
                            <td><span id="INTScore" className="statsScores"> 0</span></td>
                            <td><span id="INTModif">+0</span></td>
                            {diceRolled ?  <td><input type="button" value="Re-Roll!" className="reRollButtons" id="INT" onClick={reRollStatDice} /></td> : null }
                        </tr>
                        <tr>
                            <td>WIS</td>
                            <td><span id="WISScore" className="statsScores">0</span></td>
                            <td><span id="WISModif">+0</span></td>
                            {diceRolled ? <td><input type="button" value="Re-Roll!" className="reRollButtons" id="WIS" onClick={reRollStatDice} /></td> : null }
                        </tr>
                        <tr>
                            <td>CHA</td>
                            <td><span id="CHAScore" className="statsScores">0</span></td>
                            <td><span id="CHAModif">+0</span></td>
                            {diceRolled ? <td><input type="button" value="Re-Roll!" className="reRollButtons" id="CHA" onClick={reRollStatDice} /></td> : null }
                        </tr>
                    </tbody>
                </table>
                <input type="button" value="Roll Dice!" id="buttonDice" onClick={diceRoll} disabled={diceRolled ? true : false} />
                <input type="button" className="continueButton" value="Continue" id="continueCharacter3" onClick={() => setScreen("characterProfile")} />
            </div>
        </section>
    )
}

export { DiceRoll } 