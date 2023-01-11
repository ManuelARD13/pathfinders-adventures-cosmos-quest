import React, { useEffect } from "react";
import "./DiceRoll.css"

function DiceRoll( {diceRolled, setDiceRolled, characterStats, setStats, setScreen } ){

    const createStatsObj = (diceRolls) => ({
        CON: diceRolls.CONScore,
        STR: diceRolls.STRScore,
        DEX: diceRolls.DEXScore,
        WIS: diceRolls.WISScore,
        INT: diceRolls.INTScore,
        CHA: diceRolls.CHAScore,

        characterHeight: ((Math.random().toFixed(2) * 2) + 5)+ " feets",

        // calculateHP: function() {
        //     calculo de HP WITH CLASS AND CON STATISTICS
        // },

        // calculateHitDices: function() {
        //     calculo dados de golpe ON CLASSES
        // },

        // Investigar demas factores del personaje calculados con sus stats
    })

    const reRollMessage = document.getElementById("reRollMessage")
    const statsScores = Array.from(document.getElementsByClassName("statsScores"))
    const reRollButtons = Array.from(document.getElementsByClassName("reRollButtons"))
    let diceRolls = {}
    let reRolledCount = 3

    const statCalculator = () => Math.floor(Math.random()* 12) + 7 

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
    
            reRolledCount--
            updateReRolls() 
        } 
    }

    const updateReRolls = () => {
        if(reRolledCount === 0){
            reRollMessage.innerHTML = "You have roll all your Re-Roll chances. Excellent! this are great stats to begin your epic journey. Congrats!"
            reRollButtons.forEach((button) => {
                button.disabled = true
            })
        } else reRollMessage.innerHTML = `Great! Yet you have ${reRolledCount} chances to re-roll one of the stat's score you have get. Good Luck!`
    }

    const createStats = (diceRolls) => {
     
        let stats = createStatsObj(diceRolls)
        setStats(stats)
        setScreen("CreateCharacterScreen")
        
    }

    return(
        <section className="diceRolls">
            <div className="diceRollTableContainer">
              
                <p id="reRollMessage">3 chances</p>
                <h4>Roll your dices</h4>

                <table className="statsTable">
                    <tbody>    
                        <tr>
                            <th>Stats</th>
                            <th>Score</th>
                        </tr>
                        <tr>
                            <td> CON</td>
                            <td><span id="CONScore" className="statsScores">0</span></td>
                            {diceRolled ? <td><input type="button" value="Re-Roll!" className="reRollButtons" id="CON" onClick={reRollStatDice} /></td> : null}
                        </tr>
                        <tr>
                            <td>STR</td>
                            <td><span id="STRScore" className="statsScores">0</span></td>
                            {diceRolled ? <td><input type="button" value="Re-Roll!" className="reRollButtons" id="STR" onClick={reRollStatDice} /></td> : null }
                        </tr>
                        <tr>
                            <td>DEX</td>
                            <td><span id="DEXScore" className="statsScores">0</span></td>
                            {diceRolled ? <td><input type="button" value="Re-Roll!" className="reRollButtons" id="DEX" onClick={reRollStatDice} /></td> : null }
                        </tr>
                        <tr>
                            <td>INT</td>
                            <td><span id="INTScore" className="statsScores"> 0</span></td>
                            {diceRolled ?  <td><input type="button" value="Re-Roll!" className="reRollButtons" id="INT" onClick={reRollStatDice} /></td> : null }
                        </tr>
                        <tr>
                            <td>WIS</td>
                            <td><span id="WISScore" className="statsScores">0</span></td>
                            {diceRolled ? <td><input type="button" value="Re-Roll!" className="reRollButtons" id="WIS" onClick={reRollStatDice} /></td> : null }
                        </tr>
                        <tr>
                            <td>CHA</td>
                            <td><span id="CHAScore" className="statsScores">0</span></td>
                            {diceRolled ? <td><input type="button" value="Re-Roll!" className="reRollButtons" id="CHA" onClick={reRollStatDice} /></td> : null }
                        </tr>
                    </tbody>
                </table>
                <div className="screenButtonsContainer">
                    <input type="button" value="Return" className="screenButtons" id="continueCharacter3" onClick={() => setScreen("MainMenuScreen")} />
                    <input type="button" value="Roll Dice!" className="screenButtons" id="buttonDice" onClick={diceRoll} disabled={diceRolled ? true : false} />
                    <input type="button" value="Continue"  className={diceRolled ? "screenButtons pulsate-fwd" : "screenButtons"} id="continueCharacter3" onClick={() => createStats(diceRolls)} />
                </div>
            </div>
            <div className="statsDescription">
                <p>
                    Each character has six ability scores that represent his
                    character's most basic attributes. They are his raw talent
                    and prowess. These scores, and the modifiers
                    they create, affect nearly every aspect of a character's skills
                    and abilities. Each ability score generally ranges from 3 to
                    18, although racial bonuses and penalties can alter this; an
                    average ability score is 10.
                </p>
                <h5>Stats Characteristics</h5>
                <p>
                    Each ability partially describes your character and affects
                    some of his actions:
                </p>
                <ul>
                    <li>
                        <h6>Constitution CON</h6>
                        Represents your character's health and
                        stamina. A Constitution bonus increases a character's
                        hit points, so the ability is important for all classes. 
                    </li>
                    <li>
                        <h6>Strength STR</h6>
                        Measures muscle and physical power. This ability
                        is important for those who engage in hand-to-hand combat, 
                        such as fighters, monks, paladins, and
                        some rangers.
                    </li>
                    <li>
                        <h6>Dextery DEX</h6>
                        measures agility, reflexes, and balance. This
                        ability is the most important one for rogues, but it's also
                        useful for characters who wear light or medium armor or
                        no armor at all.
                    </li>
                    <li>
                        <h6>Intelligence INT</h6>
                        determines how well your character learns
                        and reasons. This ability is important for wizards because
                        it affects their spellcasting ability in many ways.
                    </li>
                    <li>
                        <h6>Wisdom WIS</h6>
                        describes a character's willpower, common sense,
                        awareness, and intuition. Wisdom is the most important
                        ability for clerics and druids, and it is also important for
                        paladins and rangers.
                    </li>
                    <li>
                        <h6>Charism CHA</h6>
                        measures a character's personality, personal
                        magnetism, ability to lead, and appearance. It is the most
                        important ability for paladins, sorcerers, and bards. It
                        is also important for clerics, since it affects their ability
                        to channel energy
                    </li>
                </ul>
            </div>
        </section>
    )
}

export { DiceRoll } 